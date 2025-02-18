import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import AuthorInfo from "./AuthorInfo";
import EngagementActionsButton from "../Buttons/EngagementActionsButton";

import { asyncToggleVoteThreads } from "../../states/threads/thunk";

const ThreadItem = ({ thread }) => {
  const dispatch = useDispatch();
  const {
    threadId,
    author = "Anonymous",
    avatar = "",
    createdAt,
    title,
    body,
    category,
    upVotesBy,
    downVotesBy,
    totalComments,
  } = thread;

  const onToggleVoteThreadDetail = async (voteType, threadId) => {
    await dispatch(asyncToggleVoteThreads(threadId, voteType));
  };

  if (!thread) {
    return null;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <AuthorInfo author={author} avatar={avatar} createdAt={createdAt} />
        <Typography variant="h6" component="h1">
          <Link to={`/thread/${threadId}`} style={{ color: "inherit" }}>
            {title}
          </Link>
        </Typography>
        <Typography
          mb={1.5}
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
          variant="body2"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}
        />
        <Chip label={category} />
      </CardContent>
      <CardActions>
        <EngagementActionsButton
          contentId={threadId}
          upVotes={upVotesBy}
          downVotes={downVotesBy}
          comments={totalComments}
          onToggleVote={onToggleVoteThreadDetail}
        />
      </CardActions>
    </Card>
  );
};

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    threadId: PropTypes.string.isRequired,
    author: PropTypes.string,
    avatar: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalComments: PropTypes.number.isRequired,
  }).isRequired,
};

export default ThreadItem;
