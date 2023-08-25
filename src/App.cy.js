import App from './App';

it('button should PUT request by click', () => {
  cy.intercept(
    { method: 'PUT', path: '**/api/my-api/view/put' },
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

it('button should GET request by click', () => {
  cy.intercept(
    { method: 'GET', path: '**/api/my-api/view/get' },
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
