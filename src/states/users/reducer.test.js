import { describe, it, expect } from "vitest";
import userReducer from "./reducer";

describe("userReducer", () => {
  it("should return initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN_ACTION" };

    // act
    const users = userReducer(initialState, action);

    // assert
    expect(users).toBe(initialState);
  });

  it("should return users when given by RECEIVE_USERS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_USERS",
      payload: {
        users: [
          {
            id: "john_doe",
            name: "John Doe",
            email: "john@example.com",
            avatar: "https://generated-image-url.jpg",
          },
          {
            id: "jane_doe",
            name: "Jane Doe",
            email: "jane@example.com",
            avatar: "https://generated-image-url.jpg",
          },
          {
            id: "fulan",
            name: "Si Fulan",
            email: "fulan@example.com",
            avatar: "https://generated-image-url.jpg",
          },
        ],
      },
    };

    // act
    const users = userReducer(initialState, action);

    // assert
    expect(users).toEqual(action.payload.users);
  });
});
