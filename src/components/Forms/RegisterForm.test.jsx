import React from "react";

import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { Provider } from "react-redux";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import store from "../../states";
import RegisterForm from "./RegisterForm";

expect.extend(matchers);

describe("RegisterForm component", () => {
  let nameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    registerButton;
  let onRegister;

  beforeEach(() => {
    onRegister = vi.fn();
    render(
      <Provider store={store}>
        <RegisterForm onRegister={onRegister} />
      </Provider>,
    );

    nameInput = screen.getByLabelText("Name");
    emailInput = screen.getByLabelText("Email");
    passwordInput = screen.getByLabelText("Password");
    confirmPasswordInput = screen.getByLabelText("Confirm Password");
    registerButton = screen.getByRole("button", { name: "Register" });
  });

  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    // act
    await userEvent.type(nameInput, "John Doe");

    // assert
    expect(nameInput).toHaveValue("John Doe");
  });

  it("should handle email typing correctly", async () => {
    // act
    await userEvent.type(emailInput, "x@test.com");

    // assert
    expect(emailInput).toHaveValue("x@test.com");
    expect(emailInput).toBeValid();
  });

  it("should handle password typing correctly", async () => {
    // act
    await userEvent.type(passwordInput, "12345678");

    // assert
    expect(passwordInput).toHaveValue("12345678");
  });

  it("should handle password confirmation typing correctly", async () => {
    // act
    await userEvent.type(confirmPasswordInput, "12345678");

    // assert
    expect(confirmPasswordInput).toHaveValue("12345678");
  });

  it("should show email validation error if input is not a valid email", async () => {
    // act
    await userEvent.type(emailInput, "invalid-email");

    // assert
    expect(emailInput).toBeInvalid();
  });

  it("should disable register button if any field is empty", async () => {
    // act & assert #1
    await userEvent.type(nameInput, "John Doe");
    expect(registerButton).toBeDisabled();

    // act & assert #2
    await userEvent.type(emailInput, "x@test.com");
    expect(registerButton).toBeDisabled();

    // act & assert #3
    await userEvent.type(passwordInput, "12345678");
    expect(registerButton).toBeDisabled();

    // act & assert #4
    await userEvent.type(confirmPasswordInput, "12345678");
    expect(registerButton).not.toBeDisabled();
  });

  it("should call onRegister function when register button is clicked and form is valid", async () => {
    // act
    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "x@test.com");
    await userEvent.type(passwordInput, "12345678");
    await userEvent.type(confirmPasswordInput, "12345678");
    userEvent.click(registerButton);

    // assert
    await waitFor(() =>
      expect(onRegister).toHaveBeenCalledWith({
        name: "John Doe",
        email: "x@test.com",
        password: "12345678",
      }),
    );
  });

  // @TODO: Add invalid confirm password test

  // @TODO: Add password length test

  // @TODO: Add account already exists test
});
