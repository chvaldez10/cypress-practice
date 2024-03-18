/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Visits the homepage and finds an element", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product.name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").then((logoElement) => {
      cy.log(logoElement.text());
    });
  });
});
