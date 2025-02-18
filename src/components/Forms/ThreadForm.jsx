import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import { Box, Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";

import useInput from "../../hooks/useInput";

const ThreadForm = ({ onSubmitThread }) => {
  const [loading, setLoading] = useState(false);

  const [title, handleTitleChange] = useInput("");
  const [category, handleCategoryChange] = useInput("");
  const [body, handleBodyChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await onSubmitThread({ title, body, category });
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Title"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={handleTitleChange}
        disabled={loading}
        required
      />
      <TextField
        fullWidth
        label="Category"
        variant="outlined"
        margin="normal"
        value={category}
        onChange={handleCategoryChange}
        disabled={loading}
      />
      <ReactQuill
        theme="snow"
        placeholder="Add a thread"
        value={body}
        onChange={handleBodyChange}
        style={{ marginTop: "16px", marginBottom: "16px" }}
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
          disabled={!title || !body}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

ThreadForm.propTypes = {
  onSubmitThread: PropTypes.func.isRequired,
};

export default ThreadForm;
