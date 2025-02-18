import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography } from "@mui/material";

import LeaderboardList from "../components/Thread/LeaderboardList";
import { clearLeaderboardActionCreator } from "../states/leaderboard/action";
import { asyncReceiveLeaderboard } from "../states/leaderboard/thunk";

const LeaderboardPage = () => {
  const dispatch = useDispatch();

  const leaderboard = useSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());

    return () => dispatch(clearLeaderboardActionCreator());
  }, [dispatch]);

  return (
    <section id="leaderboard-page" style={{ padding: "2rem" }}>
      <Stack direction="column" mb={6}>
        <Typography variant="h4" component="h1">
          Top active users
        </Typography>
        <Typography variant="body1" component="p">
          This is the leaderboard of the most active users in the forum.
        </Typography>
      </Stack>
      <LeaderboardList leaderboard={leaderboard} />
    </section>
  );
};

export default LeaderboardPage;
