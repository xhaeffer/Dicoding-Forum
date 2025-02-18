import { showLoading, hideLoading } from "react-redux-loading-bar";

import { setIsPreloadActionCreator } from "./action";
import { setAuthUserActionCreator } from "../authUser/action";
import { getUserLogged } from "../../data/api";

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const authUser = await getUserLogged();
    dispatch(setAuthUserActionCreator(authUser));
  } catch {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }

  dispatch(hideLoading());
};

export { asyncPreloadProcess };
