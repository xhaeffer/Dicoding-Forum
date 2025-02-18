import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { Stack, Typography } from "@mui/material";

import AuthorInfo from "./AuthorInfo";
import EngagementActionsButton from "../Buttons/EngagementActionsButton";

import { asyncToggleVoteComment } from "../../states/threadDetail/thunk";

const CommentItem = ({
  commentId,
  name,
  avatar,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
}) => {
  const dispatch = useDispatch();

  const onToggleVoteComment = async (voteType, commentId) => {
    await dispatch(asyncToggleVoteComment(commentId, voteType));
  };

  return (
    <Stack
      direction="column"
      alignItems="left"
      spacing={1}
      flexWrap="wrap"
      mb={1.5}
    >
      <AuthorInfo author={name} avatar={avatar} createdAt={createdAt} />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
      <EngagementActionsButton
        contentId={commentId}
        upVotes={upVotesBy}
        downVotes={downVotesBy}
        onToggleVote={onToggleVoteComment}
      />
    </Stack>
  );
};

CommentItem.propTypes = {
  commentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};

export default CommentItem;
