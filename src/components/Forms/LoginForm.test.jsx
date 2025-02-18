import React from "react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import LoginForm from "./LoginForm";

expect.extend(matchers);

describe("LoginForm component", () => {
  let emailInput, passwordInput, loginButton;
  let onLogin;

  beforeEach(() => {
    onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    emailInput = screen.getByLabelText("Email");
    passwordInput = screen.getByLabelText("Password");
    loginButton = screen.getByRole("button", { name: "Login" });
  });

  afterEach(() => {
    cleanup();
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

  it("should show email validation error if input is not a valid email", async () => {
    // act
    await userEvent.type(emailInput, "invalid-email");

    // assert
    expect(emailInput).toBeInvalid();
  });

  it("should disable login button if any field is empty", async () => {
    // act & assert #1
    await userEvent.type(emailInput, "x@test.com");
    expect(loginButton).toBeDisabled();

    // act & assert #2
    await userEvent.clear(emailInput);
    await userEvent.type(passwordInput, "12345678");
    expect(loginButton).toBeDisabled();
  });

  it("should call onLogin function when login button is clicked and form is valid", async () => {
    // act
    await userEvent.type(emailInput, "x@test.com");
    await userEvent.type(passwordInput, "12345678");
    userEvent.click(loginButton);

    // assert
    await waitFor(() =>
      expect(onLogin).toHaveBeenCalledWith({
        email: "x@test.com",
        password: "12345678",
      }),
    );
  });

  // @TODO: Add account validation test
});
