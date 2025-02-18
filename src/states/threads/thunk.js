import { hideLoading, showLoading } from "react-redux-loading-bar";

import {
  receiveThreadsActionCreator,
  addThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
} from "./action";
import { setAlertActionCreator } from "../alert/action";
import {
  getThreads,
  createThread,
  upVoteThread,
  downVoteThread,
  neutralVoteThread,
} from "../../data/api";

const asyncReceiveThreads = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const threads = await getThreads();
    dispatch(receiveThreadsActionCreator(threads));
  } catch (error) {
    dispatch(setAlertActionCreator({ message: error.message }));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncAddThread =
  ({ title, body, category }) =>
  async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await createThread({ title, body, category });
      dispatch(addThreadsActionCreator(thread));
      dispatch(
        setAlertActionCreator({
          severity: "success",
          message: "Thread created successfully",
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

const asyncToggleVoteThreads =
  (threadId, voteType) => async (dispatch, getState) => {
    const { authUser, threads } = getState();

    const userId = authUser.id;
    const prevThreads = [...threads];

    const thread = threads.find((t) => t.id === threadId);
    if (!thread) return;

    try {
      if (voteType === "upvote") {
        dispatch(upVoteThreadActionCreator(threadId, userId));
        await upVoteThread(threadId);
      } else if (voteType === "downvote") {
        dispatch(downVoteThreadActionCreator(threadId, userId));
        await downVoteThread(threadId);
      } else if (voteType === "neutral") {
        dispatch(neutralVoteThreadActionCreator(threadId, userId));
        await neutralVoteThread(threadId);
      }
    } catch (error) {
      dispatch(setAlertActionCreator({ message: error.message }));
      dispatch(receiveThreadsActionCreator(prevThreads));
    }
  };

export { asyncReceiveThreads, asyncAddThread, asyncToggleVoteThreads };
