const ActionType = {
  SET_ALERT: "SET_ALERT",
  UNSET_ALERT: "UNSET_ALERT",
};

const setAlertActionCreator = (alert) => {
  return {
    type: ActionType.SET_ALERT,
    payload: { alert },
  };
};

const unsetAlertActionCreator = () => {
  return {
    type: ActionType.UNSET_ALERT,
    payload: { alert: null },
  };
};

export { ActionType, setAlertActionCreator, unsetAlertActionCreator };
