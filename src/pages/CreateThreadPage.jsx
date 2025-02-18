import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import ThreadForm from "../components/Forms/ThreadForm";

import { asyncAddThread } from "../states/threads/thunk";
import { setAlertActionCreator } from "../states/alert/action";

const CreateThreadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitThread = async ({ title, body, category }) => {
    try {
      await dispatch(asyncAddThread({ title, body, category }));
      navigate("/");
    } catch (error) {
      await dispatch(setAlertActionCreator({ message: error.message }));
    }
  };

  return (
    <section id="create-thread-page" style={{ padding: "3rem" }}>
      <Typography variant="h5" component="h1">
        Create Thread
      </Typography>
      <ThreadForm onSubmitThread={onSubmitThread} />
    </section>
  );
};

export default CreateThreadPage;
