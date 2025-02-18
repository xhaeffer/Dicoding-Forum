import { hideLoading, showLoading } from "react-redux-loading-bar";

import { receiveLeaderboardActionCreator } from "./action";
import { setAlertActionCreator } from "../alert/action";
import { getLeaderboard } from "../../data/api";

const asyncReceiveLeaderboard = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const threads = await getLeaderboard();
    dispatch(receiveLeaderboardActionCreator(threads));
  } catch (error) {
    dispatch(setAlertActionCreator({ message: error.message }));
  } finally {
    dispatch(hideLoading());
  }
};

export { asyncReceiveLeaderboard };
