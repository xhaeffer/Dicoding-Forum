import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Add } from "@mui/icons-material";

const CreateThreadButton = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (isDesktop) {
    return (
      <Button
        variant="outline"
        startIcon={<Add />}
        onClick={() => navigate("/create")}
      >
        Create
      </Button>
    );
  }

  return (
    <IconButton onClick={() => navigate("/create")}>
      <Add />
    </IconButton>
  );
};

export default CreateThreadButton;
