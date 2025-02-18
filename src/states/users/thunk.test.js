import { describe, afterEach, vi, it, expect } from "vitest";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import * as api from "../../data/api";
import { asyncReceiveUsers, asyncRegisterUser } from "./thunk";
import { receiveUsersActionCreator } from "./action";
import { setAlertActionCreator } from "../alert/action";

const fakeUsers = [
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
];

const fakeRegisterData = {
  email: "test@test.com",
  name: "Test",
  password: "test",
};

const fakeError = new Error("Something went wrong!");

describe("asyncReceiveUsers thunk", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispacth actions correctly when data fetching success", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getUsers").mockResolvedValue(fakeUsers);

    // act
    await asyncReceiveUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispacth actions correctly when data fetching failed", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "getUsers").mockRejectedValue(fakeError);

    // act
    await asyncReceiveUsers()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAlertActionCreator({ message: fakeError.message }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe("asyncRegisterUser thunk", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispacth actions correctly when register success", async () => {
    // arrange
    const dispatch = vi.fn();
    vi.spyOn(api, "register").mockResolvedValue();

    // act
    await asyncRegisterUser(fakeRegisterData)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAlertActionCreator({
        severity: "success",
        message: "Register Success!",
      }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
