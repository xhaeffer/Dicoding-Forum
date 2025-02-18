import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, Typography } from "@mui/material";

import Logo from "../components/Logo/Logo";
import LoginForm from "../components/Forms/LoginForm";

import { asyncSetAuthUser } from "../states/authUser/thunk";
import { setAlertActionCreator } from "../states/alert/action";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    try {
      await dispatch(asyncSetAuthUser({ email, password }));
      navigate("/");
    } catch (error) {
      await dispatch(setAlertActionCreator({ message: error.message }));
    }
  };

  return (
    <section
      id="login"
      style={{ display: "flex", minHeight: "100vh", padding: 10 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "auto",
          padding: 5,
          gap: 3,
        }}
      >
        <Logo />
        <LoginForm onLogin={onLogin} />
        <Typography variant="body2" component="p">
          Don&apos;t have an account?{" "}
          <Link to="/register" style={{ color: "inherit" }}>
            Register
          </Link>
        </Typography>
      </Card>
    </section>
  );
};

export default LoginPage;
