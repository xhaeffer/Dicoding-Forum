import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

import LeaderboardItem from "./LeaderboardItem";

const LeaderboardList = ({ leaderboard }) => {
  return (
    <Stack direction="column">
      {leaderboard.map((users) => {
        const { user, score } = users;
        const { name, avatar } = user;

        return (
          <LeaderboardItem
            key={name}
            name={name}
            avatar={avatar}
            score={score}
          />
        );
      })}
    </Stack>
  );
};

LeaderboardList.propTypes = {
  leaderboard: PropTypes.array.isRequired,
};

export default LeaderboardList;
