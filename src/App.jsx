import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "./components/Loaders/ProgressBar";
import Navbar from "./components/Navbar/Navbar";
import AutoDismissAlert from "./components/Alerts/AutoDismissAlert";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ThreadDetailPage from "./pages/ThreadDetailPage";
import CreateThreadPage from "./pages/CreateThreadPage";
import LeaderboardPage from "./pages/LeaderboardPage";

import { asyncPreloadProcess } from "./states/isPreload/thunk";
import { asyncUnsetAuthUser } from "./states/authUser/thunk";

import "./styles/style.css";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);

  const onLogout = async () => {
    await dispatch(asyncUnsetAuthUser());
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <ProgressBar />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <AutoDismissAlert />
      </>
    );
  }

  return (
    <>
      <Navbar user={authUser} onLogout={onLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thread/:id" element={<ThreadDetailPage />} />
        <Route path="/create" element={<CreateThreadPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
      <AutoDismissAlert />
    </>
  );
};

export default App;
