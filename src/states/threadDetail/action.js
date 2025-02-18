const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  UPVOTE_THREAD_DETAIL: "UPVOTE_THREAD_DETAIL",
  DOWNVOTE_THREAD_DETAIL: "DOWNVOTE_THREAD_DETAIL",
  NEUTRALVOTE_THREAD_DETAIL: "NEUTRALVOTE_THREAD_DETAIL",
  ADD_COMMENT_THREAD_DETAIL: "ADD_COMMENT_THREAD_DETAIL",
  UPVOTE_COMMENT: "UPVOTE_COMMENT",
  DOWNVOTE_COMMENT: "DOWNVOTE_COMMENT",
  NEUTRALVOTE_COMMENT: "NEUTRALVOTE_COMMENT",
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: { threadDetail },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const upVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.UPVOTE_THREAD_DETAIL,
  payload: { userId },
});

const downVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.DOWNVOTE_THREAD_DETAIL,
  payload: { userId },
});

const neutralVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.NEUTRALVOTE_THREAD_DETAIL,
  payload: { userId },
});

const addCommentThreadDetailActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT_THREAD_DETAIL,
  payload: { comment },
});

const upVoteCommentActionCreator = (commentId, userId) => ({
  type: ActionType.UPVOTE_COMMENT,
  payload: { commentId, userId },
});

const downVoteCommentActionCreator = (commentId, userId) => ({
  type: ActionType.DOWNVOTE_COMMENT,
  payload: { commentId, userId },
});

const neutralVoteCommentActionCreator = (commentId, userId) => ({
  type: ActionType.NEUTRALVOTE_COMMENT,
  payload: { commentId, userId },
});

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralVoteThreadDetailActionCreator,
  addCommentThreadDetailActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
};
