import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@mui/material";

import useInput from "../../hooks/useInput";

const LoginForm = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await onLogin({ email, password });
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
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
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          variant="contained"
          type="submit"
          color="inherit"
          loading={loading}
          loadingPosition="end"
          disabled={!email || !password}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
