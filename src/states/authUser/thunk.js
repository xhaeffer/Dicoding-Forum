import { showLoading, hideLoading } from "react-redux-loading-bar";

import { setAuthUserActionCreator, unsetAuthUserActionCreator } from "./action";
import { login, getUserLogged, putAccessToken } from "../../data/api";

const asyncSetAuthUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(showLoading());

      const token = await login({ email, password });
      putAccessToken(token);

      const user = await getUserLogged();
      dispatch(setAuthUserActionCreator(user));
    } finally {
      dispatch(hideLoading());
    }
  };

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(showLoading());

  dispatch(unsetAuthUserActionCreator());
  putAccessToken("");

  dispatch(hideLoading());
};

export { asyncSetAuthUser, asyncUnsetAuthUser };
