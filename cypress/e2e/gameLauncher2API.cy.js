
describe('Registrations spec', () => {

  it('gameLauncher2API', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('baseUrl') + "/kambi-rest-api/gameLauncher2.json",
      qs: {
        brand: "unibet",
        jurisdiction: "UK",
        locale: "en_GB"
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.lang).to.eq("en_GB")
      expect(response.body.jurisdiction).to.eq('uk')
    })
  })
})
