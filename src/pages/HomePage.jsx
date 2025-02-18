import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";

import { asyncReceiveUsers } from "../states/users/thunk";
import { asyncReceiveThreads } from "../states/threads/thunk";
import ThreadList from "../components/Thread/ThreadList";
import CategoryList from "../components/Thread/CategoryList";

const HomePage = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const threads = useSelector((state) => state.threads);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const threadsWithAuthors = useMemo(() => {
    return threads.map((thread) => {
      const authorData = users.find((user) => user.id === thread.ownerId);
      return {
        ...thread,
        threadId: thread.id,
        author: authorData?.name,
        avatar: authorData?.avatar,
      };
    });
  }, [threads, users]);

  const filteredThreads = useMemo(() => {
    return selectedCategory === "All"
      ? threadsWithAuthors
      : threadsWithAuthors.filter(
          (thread) => thread.category === selectedCategory,
        );
  }, [threadsWithAuthors, selectedCategory]);

  const threadsCategory = useMemo(
    () => ["All", ...new Set(threads.map((thread) => thread.category))],
    [threads],
  );

  useEffect(() => {
    dispatch(asyncReceiveUsers());
    dispatch(asyncReceiveThreads());
  }, [dispatch]);

  return (
    <section id="home-page" style={{ padding: "2rem" }}>
      <Stack spacing={1} direction="column" mb={6}>
        <Typography variant="h3">Welcome to Dicoding Forum</Typography>
        <Typography variant="body1">
          This is a simple forum where you can create a thread and reply to
          other threads.
        </Typography>
      </Stack>
      <Stack spacing={2} direction="column" mb={2}>
        <Typography variant="body2" component="p">
          Filter by Category
        </Typography>
        <CategoryList
          threadsCategory={threadsCategory}
          selectedCategory={selectedCategory}
          onSetCategory={setSelectedCategory}
        />
      </Stack>
      <ThreadList threads={filteredThreads} />
    </section>
  );
};

export default HomePage;
