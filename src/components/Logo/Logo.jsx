import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Logo = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <img
      src={
        isDesktop
          ? "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png"
          : "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png"
      }
      alt="Dicoding Forum"
      width={isDesktop ? 120 : 36}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
