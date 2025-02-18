import { ActionType } from "./action";

const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;

    case ActionType.CLEAR_THREAD_DETAIL:
      return null;

    case ActionType.UPVOTE_THREAD_DETAIL:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId) // Hapus upvote jika sudah ada (neutral)
          : [...threadDetail.upVotesBy, action.payload.userId], // Tambah upvote jika belum ada
        downVotesBy: threadDetail.downVotesBy.filter(
          (id) => id !== action.payload.userId,
        ), // Hapus downvote jika ada
      };

    case ActionType.DOWNVOTE_THREAD_DETAIL:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter(
              (id) => id !== action.payload.userId,
            ) // Hapus downvote jika sudah ada (neutral)
          : [...threadDetail.downVotesBy, action.payload.userId], // Tambah downvote jika belum ada
        upVotesBy: threadDetail.upVotesBy.filter(
          (id) => id !== action.payload.userId,
        ), // Hapus upvote jika ada
      };

    case ActionType.NEUTRALVOTE_THREAD_DETAIL:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter(
          // Hapus upvote
          (id) => id !== action.payload.userId,
        ),
        downVotesBy: threadDetail.downVotesBy.filter(
          // Hapus downvote
          (id) => id !== action.payload.userId,
        ),
      };

    case ActionType.ADD_COMMENT_THREAD_DETAIL:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };

    case ActionType.UPVOTE_COMMENT:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id !== action.payload.commentId) return comment;
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId) // Hapus upvote jika sudah ada (neutral)
              : [...comment.upVotesBy, action.payload.userId], // Tambah upvote jika belum ada
            downVotesBy: comment.downVotesBy.filter(
              (id) => id !== action.payload.userId, // Hapus downvote jika ada
            ),
          };
        }),
      };

    case ActionType.DOWNVOTE_COMMENT:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id !== action.payload.commentId) return comment;
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId) // Hapus downvote jika sudah ada (neutral)
              : [...comment.downVotesBy, action.payload.userId], // Tambah downvote jika belum ada
            upVotesBy: comment.upVotesBy.filter(
              (id) => id !== action.payload.userId, // Hapus upvote jika ada
            ),
          };
        }),
      };

    case ActionType.NEUTRALVOTE_COMMENT:
      if (!threadDetail) return threadDetail;
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id !== action.payload.commentId) return comment;
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.filter(
              // Hapus upvote
              (id) => id !== action.payload.userId,
            ),
            downVotesBy: comment.downVotesBy.filter(
              // Hapus downvote
              (id) => id !== action.payload.userId,
            ),
          };
        }),
      };

    default:
      return threadDetail;
  }
};

export default threadDetailReducer;
