import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

import ThreadItem from "./ThreadItem";

const ThreadList = ({ threads }) => {
  return (
    <Stack direction="column">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </Stack>
  );
};

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
};

export default ThreadList;
