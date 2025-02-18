const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  RECEIVE_THREADS_BY_CATEGORY: "RECEIVE_THREADS_BY_CATEGORY",
  ADD_THREADS: "ADD_THREADS",
  UPVOTE_THREAD: "UPVOTE_THREAD",
  DOWNVOTE_THREAD: "DOWNVOTE_THREAD",
  NEUTRALVOTE_THREAD: "NEUTRALVOTE_THREAD",
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: { threads },
});

const receiveThreadsByCategoryActionCreator = (category) => ({
  type: ActionType.RECEIVE_THREADS_BY_CATEGORY,
  payload: { category },
});

const addThreadsActionCreator = (thread) => ({
  type: ActionType.ADD_THREADS,
  payload: { thread },
});

const upVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.UPVOTE_THREAD,
  payload: { threadId, userId },
});

const downVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.DOWNVOTE_THREAD,
  payload: { threadId, userId },
});

const neutralVoteThreadActionCreator = (threadId, userId) => ({
  type: ActionType.NEUTRALVOTE_THREAD,
  payload: { threadId, userId },
});

export {
  ActionType,
  receiveThreadsActionCreator,
  receiveThreadsByCategoryActionCreator,
  addThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
};
