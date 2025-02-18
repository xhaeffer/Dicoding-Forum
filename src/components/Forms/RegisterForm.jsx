import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";

import useInput from "../../hooks/useInput";

import { setAlertActionCreator } from "../../states/alert/action";

const RegisterForm = ({ onRegister }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      dispatch(setAlertActionCreator({ message: "Passwords do not match" }));
      return;
    }

    setLoading(true);
    await onRegister({ name, email, password });
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={handleNameChange}
        disabled={loading}
      />
      <TextField
        fullWidth
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={handleEmailChange}
        disabled={loading}
      />
      <TextField
        fullWidth
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={handlePasswordChange}
        disabled={loading}
      />
      <TextField
        fullWidth
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        disabled={loading}
      />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          variant="contained"
          type="submit"
          color="inherit"
          loading={loading}
          loadingPosition="end"
          disabled={!name || !email || !password || !confirmPassword}
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
