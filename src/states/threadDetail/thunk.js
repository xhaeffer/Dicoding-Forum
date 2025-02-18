import { showLoading, hideLoading } from "react-redux-loading-bar";

import {
  receiveThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralVoteThreadDetailActionCreator,
  addCommentThreadDetailActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
} from "./action";
import { setAlertActionCreator } from "../alert/action";
import {
  getThreadDetail,
  upVoteThread,
  downVoteThread,
  neutralVoteThread,
  createThreadComment,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
} from "../../data/api";

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadDetail = await getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    dispatch(setAlertActionCreator({ message: error.message }));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncAddCommentThreadDetail = (comment) => async (dispatch, getState) => {
  const { threadDetail } = getState();
  const threadId = threadDetail.id;

  dispatch(showLoading());
  try {
    const response = await createThreadComment(threadId, comment);
    dispatch(addCommentThreadDetailActionCreator(response));
  } catch (error) {
    dispatch(setAlertActionCreator({ message: error.message }));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncToggleVoteThreadDetail =
  (voteType) => async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    const userId = authUser.id;
    const threadId = threadDetail.id;

    const prevThreadDetail = { ...threadDetail };

    try {
      if (voteType === "upvote") {
        dispatch(upVoteThreadDetailActionCreator(userId));
        await upVoteThread(threadId);
      } else if (voteType === "downvote") {
        dispatch(downVoteThreadDetailActionCreator(userId));
        await downVoteThread(threadId);
      } else if (voteType === "neutral") {
        dispatch(neutralVoteThreadDetailActionCreator(userId));
        await neutralVoteThread(threadId);
      }
    } catch (error) {
      dispatch(setAlertActionCreator({ message: error.message }));
      dispatch(receiveThreadDetailActionCreator(prevThreadDetail));
    }
  };

const asyncToggleVoteComment =
  (commentId, voteType) => async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const userId = authUser.id;
    const threadId = threadDetail.id;

    const prevThreadDetail = { ...threadDetail };

    try {
      if (voteType === "upvote") {
        dispatch(upVoteCommentActionCreator(commentId, userId));
        await upVoteComment(threadId, commentId);
      } else if (voteType === "downvote") {
        dispatch(downVoteCommentActionCreator(commentId, userId));
        await downVoteComment(threadId, commentId);
      } else if (voteType === "neutral") {
        dispatch(neutralVoteCommentActionCreator(commentId, userId));
        await neutralVoteComment(threadId, commentId);
      }
    } catch (error) {
      dispatch(setAlertActionCreator({ message: error.message }));
      dispatch(receiveThreadDetailActionCreator(prevThreadDetail));
    }
  };

export {
  asyncReceiveThreadDetail,
  asyncAddCommentThreadDetail,
  asyncToggleVoteThreadDetail,
  asyncToggleVoteComment,
};
