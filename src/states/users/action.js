const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: { users },
});

export { ActionType, receiveUsersActionCreator };
