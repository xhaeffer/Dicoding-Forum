import { describe, afterEach, vi, it, expect } from "vitest";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import * as api from "../../data/api";
import { asyncReceiveLeaderboard } from "./thunk";
import { receiveLeaderboardActionCreator } from "./action";
import { setAlertActionCreator } from "../alert/action";

const fakeLeaderboard = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
  {
    user: {
      id: "users-2",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 5,
  },
];
const fakeError = new Error("Something went wrong!");

describe("asyncReceiveLeaderboard thunk", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispacth actions correctly when data fetching success", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getLeaderboard").mockResolvedValue(fakeLeaderboard);

    // act
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboard),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispacth actions correctly when data fetching failed", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getLeaderboard").mockRejectedValue(fakeError);

    // act
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAlertActionCreator({ message: fakeError.message }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
