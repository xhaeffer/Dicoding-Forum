import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "@mui/material";

import ThreadDetail from "../components/Thread/ThreadDetail";
import CommentForm from "../components/Forms/CommentForm";
import CommentList from "../components/Thread/CommentList";

import { asyncReceiveThreadDetail } from "../states/threadDetail/thunk";
import { clearThreadDetailActionCreator } from "../states/threadDetail/action";
import { asyncAddCommentThreadDetail } from "../states/threadDetail/thunk";

const ThreadDetailPage = () => {
  const { id: threadId } = useParams();
  const dispatch = useDispatch();

  const threadDetail = useSelector((state) => state.threadDetail);
  const { comments: threadComments } = threadDetail || {};

  const onSubmitComment = async (comment) => {
    await dispatch(asyncAddCommentThreadDetail(comment));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));

    return () => dispatch(clearThreadDetailActionCreator());
  }, [dispatch, threadId]);

  if (!threadDetail) {
    return null;
  }

  return (
    <section id="thread-detail-page" style={{ padding: "1rem" }}>
      <Stack direction="column" spacing={4}>
        <ThreadDetail thread={threadDetail} />
        <CommentForm onSubmitComment={onSubmitComment} />
        <CommentList threadComments={threadComments} />
      </Stack>
    </section>
  );
};

export default ThreadDetailPage;
