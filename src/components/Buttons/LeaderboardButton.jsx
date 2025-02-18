import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LeaderboardOutlined } from "@mui/icons-material";

const LeaderboardButton = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (isDesktop) {
    return (
      <Button
        variant="outline"
        startIcon={<LeaderboardOutlined />}
        onClick={() => navigate("/leaderboard")}
      >
        Leaderboard
      </Button>
    );
  }

  return (
    <IconButton onClick={() => navigate("/leaderboard")}>
      <LeaderboardOutlined />
    </IconButton>
  );
};

export default LeaderboardButton;
