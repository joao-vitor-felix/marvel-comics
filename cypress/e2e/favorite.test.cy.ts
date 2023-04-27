import "@testing-library/cypress/add-commands";

describe("Favorite", () => {
  it("user can favorite a comic", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.findByLabelText("Favoritar Thor (2020) #33").click();
    cy.findByLabelText("Favoritos").click();
    cy.findByLabelText("Home").click();
    cy.findByText("Deadpool (2022) #6").click();
    cy.findByText("Favorite").click();
    cy.findByLabelText("Home").click();
    cy.findByLabelText("Favoritos").click();
    cy.findByLabelText("Desfavoritar Thor (2020) #33").click();
  });
});
