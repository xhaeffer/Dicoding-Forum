import { describe, it, expect } from "vitest";
import leaderboardReducer from "./reducer";

describe("leaderboardReducer", () => {
  it("should return initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN_ACTION" };

    // act
    const leaderboard = leaderboardReducer(initialState, action);

    // assert
    expect(leaderboard).toBe(initialState);
  });

  it("should return leaderboard when given by RECEIVE_LEADERBOARD action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_LEADERBOARD",
      payload: {
        leaderboard: [
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
        ],
      },
    };

    // act
    const leaderboard = leaderboardReducer(initialState, action);

    // assert
    expect(leaderboard).toEqual(action.payload.leaderboard);
  });

  it("should clear leaderboard when given CLEAR_LEADERBOARD action", () => {
    // arrange
    const initialState = [
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
    const action = { type: "CLEAR_LEADERBOARD" };

    // act
    const leaderboard = leaderboardReducer(initialState, action);

    // assert
    expect(leaderboard).toEqual([]);
  });
});
