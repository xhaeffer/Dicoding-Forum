import { showLoading, hideLoading } from "react-redux-loading-bar";

import { receiveUsersActionCreator } from "./action";
import { setAlertActionCreator } from "../alert/action";
import { getUsers, register } from "../../data/api";

const asyncReceiveUsers = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const users = await getUsers();
    dispatch(receiveUsersActionCreator(users));
  } catch (error) {
    dispatch(setAlertActionCreator({ message: error.message }));
  } finally {
    dispatch(hideLoading());
  }
};

const asyncRegisterUser =
  ({ email, name, password }) =>
  async (dispatch) => {
    dispatch(showLoading());

    try {
      await register({ email, name, password });
      dispatch(
        setAlertActionCreator({
          severity: "success",
          message: "Register Success!",
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

export { asyncReceiveUsers, asyncRegisterUser };
