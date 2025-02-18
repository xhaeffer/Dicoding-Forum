import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { Box, Chip, Typography } from "@mui/material";

import AuthorInfo from "./AuthorInfo";
import EngagementActionsButton from "../Buttons/EngagementActionsButton";
import { asyncToggleVoteThreadDetail } from "../../states/threadDetail/thunk";

const ThreadDetail = ({ thread }) => {
  const dispatch = useDispatch();
  const {
    id: threadId,
    owner,
    createdAt,
    title,
    body,
    category,
    upVotesBy,
    downVotesBy,
    comments,
  } = thread;
  const { name: author, avatar } = owner;

  const onToggleVoteThreadDetail = async (voteType) => {
    await dispatch(asyncToggleVoteThreadDetail(voteType));
  };

  return (
    <Box>
      <AuthorInfo author={author} avatar={avatar} createdAt={createdAt} />
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography
        variant="body1"
        mb={1}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}
      />
      <Chip label={category} />
      <Box mt={1}>
        <EngagementActionsButton
          contentId={threadId}
          upVotes={upVotesBy}
          downVotes={downVotesBy}
          comments={comments.length}
          onToggleVote={onToggleVoteThreadDetail}
        />
      </Box>
    </Box>
  );
};

ThreadDetail.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};

export default ThreadDetail;
