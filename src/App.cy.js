import App from './App';

it('button should get request by click', () => {
  cy.intercept(
    { method: 'GET', path: '**/api/my-api/view/123' },
    async (req) => {
        req.reply({
            body: { key: 'get' },
            statusCode: 200,
        });
    },
  ).as('get');

  cy.mount(<App />)

  cy.get('button[name=get]').click();

  cy.wait('@get');
});

it('button should put request by click', () => {
  cy.intercept(
    { method: 'PUT', path: '**/api/my-api/view/123' },
    async (req) => {
        req.reply({
            body: { key: 'put' },
            statusCode: 200,
        });
    },
  ).as('put');

  cy.mount(<App />);

  cy.get('button[name=put]').click();

  cy.wait('@put');
});
