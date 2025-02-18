import { describe, it, expect } from "vitest";
import alertReducer from "./reducer";

describe("alertReducer", () => {
  it("should return initial state when given by unknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN_ACTION" };

    // act
    const alert = alertReducer(initialState, action);

    // assert
    expect(alert).toBe(initialState);
  });

  it("should set alert when given by SET_ALERT action", () => {
    // arrange
    const initialState = null;
    const action = { type: "SET_ALERT", payload: { alert: "Hello" } };

    // act
    const alert = alertReducer(initialState, action);

    // assert
    expect(alert).toBe("Hello");
  });

  it("should unset alert when given by UNSET_ALERT action", () => {
    // arrange
    const initialState = "Hello";
    const action = { type: "UNSET_ALERT" };

    // act
    const alert = alertReducer(initialState, action);

    // assert
    expect(alert).toBe(null);
  });
});
