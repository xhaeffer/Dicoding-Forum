import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@mui/material";

import { unsetAlertActionCreator } from "../../states/alert/action";

const AutoDismissAlert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (alert) {
      setVisible(true);
      const task = setTimeout(() => {
        setVisible(false);
        dispatch(unsetAlertActionCreator());
      }, 3000);

      return () => clearTimeout(task);
    }
  }, [alert, dispatch]);

  if (!visible || !alert) return null;

  return (
    <Alert
      variant="outlined"
      severity={alert?.severity || "error"}
      onClose={() => dispatch(unsetAlertActionCreator())}
      sx={{
        width: "fit-content",
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        bgcolor: "background.paper",
      }}
    >
      {alert.message}
    </Alert>
  );
};

export default AutoDismissAlert;
