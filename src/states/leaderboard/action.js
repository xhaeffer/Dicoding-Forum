const ActionType = {
  RECEIVE_LEADERBOARD: "RECEIVE_LEADERBOARD",
  CLEAR_LEADERBOARD: "CLEAR_LEADERBOARD",
};

const receiveLeaderboardActionCreator = (leaderboard) => ({
  type: ActionType.RECEIVE_LEADERBOARD,
  payload: { leaderboard },
});

const clearLeaderboardActionCreator = () => ({
  type: ActionType.CLEAR_LEADERBOARD,
});

export {
  ActionType,
  receiveLeaderboardActionCreator,
  clearLeaderboardActionCreator,
};
