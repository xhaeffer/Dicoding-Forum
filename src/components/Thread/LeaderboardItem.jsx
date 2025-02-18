import React from "react";
import PropTypes from "prop-types";
import { Avatar, Card, Stack, Typography } from "@mui/material";

const LeaderboardItem = ({ name, avatar, score }) => {
  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatar} />
          <Typography variant="h6" component="p">
            {name}
          </Typography>
        </Stack>
        <Typography variant="h6" component="p">
          {score}
        </Typography>
      </Stack>
    </Card>
  );
};

LeaderboardItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
