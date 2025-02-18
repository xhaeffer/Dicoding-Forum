import { ActionType } from "./action";

const leaderboardReducer = (leaderboard = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderboard;

    case ActionType.CLEAR_LEADERBOARD:
      return [];

    default:
      return leaderboard;
  }
};

export default leaderboardReducer;
