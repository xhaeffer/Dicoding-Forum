import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

import Logo from "../Logo/Logo";
import ProgressBar from "../Loaders/ProgressBar";
import CreateThreadButton from "../Buttons/CreateThreadButton";
import LeaderboardButton from "../Buttons/LeaderboardButton";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleLogout = async () => {
    handleCloseMenu();
    await onLogout();

    navigate("/");
  };

  const { name, avatar } = user;

  return (
    <AppBar position="sticky">
      <ProgressBar />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CreateThreadButton />
          <LeaderboardButton />
          <IconButton onClick={handleOpenMenu}>
            <Avatar alt={name} src={avatar} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
