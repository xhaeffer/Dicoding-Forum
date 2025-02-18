import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";

import VoteButton from "./VoteButton";

const EngagementActionsButton = ({
  contentId,
  upVotes,
  downVotes,
  comments,
  onToggleVote,
}) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
      <VoteButton
        contentId={contentId}
        upVotes={upVotes}
        downVotes={downVotes}
        onToggleVote={onToggleVote}
      />
      {comments != undefined && (
        <Button
          variant="outlined"
          color="black"
          startIcon={<ChatBubbleOutline />}
          onClick={() => navigate(`/thread/${contentId}`)}
        >
          {comments}
        </Button>
      )}
    </Stack>
  );
};

EngagementActionsButton.propTypes = {
  contentId: PropTypes.string.isRequired,
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  comments: PropTypes.number,
  onToggleVote: PropTypes.func.isRequired,
};

export default EngagementActionsButton;
