import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

const VoteButton = ({ contentId, upVotes, downVotes, onToggleVote }) => {
  const { id: userId } = useSelector((state) => state.authUser);
  const [alignment, setAlignment] = useState(() =>
    upVotes.includes(userId)
      ? "upvote"
      : downVotes.includes(userId)
        ? "downvote"
        : "neutral",
  );

  const onChange = async (_, newAlignment) => {
    if (newAlignment === null) newAlignment = "neutral";

    setAlignment(newAlignment);
    await onToggleVote(newAlignment, contentId);
  };

  useEffect(() => {
    setAlignment(
      upVotes.includes(userId)
        ? "upvote"
        : downVotes.includes(userId)
          ? "downvote"
          : "neutral",
    );
  }, [upVotes, downVotes, userId]);

  return (
    <ToggleButtonGroup
      exclusive
      value={alignment}
      onChange={onChange}
      size="small"
    >
      <ToggleButton value="upvote">
        <ArrowDropUp /> {upVotes.length}
      </ToggleButton>
      <ToggleButton value="downvote">
        <ArrowDropDown /> {downVotes.length}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

VoteButton.propTypes = {
  contentId: PropTypes.string.isRequired,
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  onToggleVote: PropTypes.func.isRequired,
};

export default VoteButton;
