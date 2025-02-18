import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import { Box, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import useInput from "../../hooks/useInput";

const CommentForm = ({ onSubmitComment }) => {
  const [loading, setLoading] = useState(false);
  const [comment, handleCommentChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await onSubmitComment(comment);
    setLoading(false);

    handleCommentChange("");
  };

  return (
    <form onSubmit={onSubmit}>
      <ReactQuill
        theme="snow"
        placeholder="Add a comment"
        value={comment}
        onChange={handleCommentChange}
        style={{ marginBottom: "16px" }}
        readOnly={loading}
      />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          variant="contained"
          type="submit"
          color="inherit"
          endIcon={<Send />}
          loading={loading}
          loadingPosition="end"
          disabled={!comment}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmitComment: PropTypes.func.isRequired,
};

export default CommentForm;
