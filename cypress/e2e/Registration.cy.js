
describe('Registrations spec', () => {
  beforeEach(function() {
    cy.visit(Cypress.env('baseUrl')+"/registration")
  })

  it('Registrations', () => {
    cy.verifyOfferPage()
    cy.verifyRegistrationForm()
    cy.fillRegistrationForm()
    cy.secondStepRegistration()
  })
})
