import React from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, Typography } from "@mui/material";

import { getTimeElapsed } from "../../utils";

const AuthorInfo = ({ author, avatar, createdAt }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      flexWrap="wrap"
      mb={1.5}
    >
      <Avatar alt={author} sx={{ width: 24, height: 24 }} src={avatar} />
      <Typography variant="body2" color="text.secondary">
        {author} • {getTimeElapsed(createdAt)}
      </Typography>
    </Stack>
  );
};

AuthorInfo.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default AuthorInfo;
