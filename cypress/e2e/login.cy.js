describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display login page correctly", () => {
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get("button").contains("Login").should("be.visible");
  });

  it("should disable login button if any field is empty", () => {
    cy.get('input[name="email"]').type(`{esc}`);
    cy.get('input[name="password"]').type(`{esc}`);
    cy.get("button").contains("Login").should("be.disabled");
  });

  it("should display alert when username and password are wrong", () => {
    cy.get('input[name="email"]').type("xh@gmail.com");
    cy.get('input[name="password"]').type("xhxhx");
    cy.get("button").contains("Login").click();
    cy.get("div[role='alert']").should("be.visible");
  });

  it("should display homepage when username and password are correct", () => {
    cy.get('input[name="email"]').type("xh@gmail.com");
    cy.get('input[name="password"]').type("xhxhxh");
    cy.get("button").contains("Login").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
