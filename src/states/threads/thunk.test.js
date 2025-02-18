import { describe, afterEach, vi, it, expect } from "vitest";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import * as api from "../../data/api";
import { asyncReceiveThreads } from "./thunk";
import { receiveThreadsActionCreator } from "./action";
import { setAlertActionCreator } from "../alert/action";

const fakeThreads = [
  {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: "users-1",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
  {
    id: "thread-2",
    title: "Thread Kedua",
    body: "Ini adalah thread kedua",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: "users-2",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];
const fakeError = new Error("Something went wrong!");

describe("asyncReceiveThreads thunk", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispacth actions correctly when data fetching success", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getThreads").mockResolvedValue(fakeThreads);

    // act
    await asyncReceiveThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreads),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispacth actions correctly when data fetching failed", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getThreads").mockRejectedValue(fakeError);

    // act
    await asyncReceiveThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAlertActionCreator({ message: fakeError.message }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
