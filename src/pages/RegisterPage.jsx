import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, Typography } from "@mui/material";

import Logo from "../components/Logo/Logo";
import RegisterForm from "../components/Forms/RegisterForm";

import { asyncRegisterUser } from "../states/users/thunk";
import { setAlertActionCreator } from "../states/alert/action";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    try {
      await dispatch(asyncRegisterUser({ name, email, password }));
      navigate("/login");
    } catch (error) {
      await dispatch(setAlertActionCreator({ message: error.message }));
    }
  };

  return (
    <section
      id="register"
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
        <RegisterForm onRegister={onRegister} />
        <Typography variant="body2" component="p">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "inherit" }}>
            Login
          </Link>
        </Typography>
      </Card>
    </section>
  );
};

export default RegisterPage;
