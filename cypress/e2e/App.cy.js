describe("App", () => {
  it("should request by click", () => {
    cy.intercept(
      { method: 'GET', path: '**/api/my-api/view/123' },
      async (req) => {
          req.reply({
              body: { key: 'get' },
              statusCode: 200,
          });
      },
    ).as('get');

    cy.intercept(
      { method: 'PUT', path: '**/api/my-api/view/123' },
      async (req) => {
          req.reply({
              body: { key: 'put' },
              statusCode: 200,
          });
      },
    ).as('put');

    cy.visit('/');
  });
});
