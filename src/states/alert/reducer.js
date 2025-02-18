import { ActionType } from "./action";

const alertReducer = (alert = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_ALERT:
      return action.payload.alert;

    case ActionType.UNSET_ALERT:
      return null;

    default:
      return alert;
  }
};

export default alertReducer;
