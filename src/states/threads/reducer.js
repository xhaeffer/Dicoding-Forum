import { ActionType } from "./action";

const threadsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;

    case ActionType.ADD_THREADS:
      return [action.payload.thread, ...state];

    case ActionType.UPVOTE_THREAD:
      return state.map((thread) =>
        thread.id === action.payload.threadId
          ? {
              ...thread,
              upVotesBy: thread.upVotesBy.includes(action.payload.userId)
                ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                : [...thread.upVotesBy, action.payload.userId],
              downVotesBy: thread.downVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
            }
          : thread,
      );

    case ActionType.DOWNVOTE_THREAD:
      return state.map((thread) =>
        thread.id === action.payload.threadId
          ? {
              ...thread,
              downVotesBy: thread.downVotesBy.includes(action.payload.userId)
                ? thread.downVotesBy.filter(
                    (id) => id !== action.payload.userId,
                  )
                : [...thread.downVotesBy, action.payload.userId],
              upVotesBy: thread.upVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
            }
          : thread,
      );

    case ActionType.NEUTRALVOTE_THREAD:
      return state.map((thread) =>
        thread.id === action.payload.threadId
          ? {
              ...thread,
              upVotesBy: thread.upVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
              downVotesBy: thread.downVotesBy.filter(
                (id) => id !== action.payload.userId,
              ),
            }
          : thread,
      );

    default:
      return state;
  }
};

export default threadsReducer;
