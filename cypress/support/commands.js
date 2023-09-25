
import { Registrations } from "./elements"
import data from '../fixtures/parameters.json'

Cypress.Commands.add('verifyOfferPage', () => {
    cy.wait(3000)
    expect(cy.title().should('eq','Register with Unibet Today')) //Title is not "Join the club"
    cy.wait(3000)
    cy.get(Registrations.cookies).click()
    cy.get(Registrations.firstPromotion).should('be.visible')
    cy.get(Registrations.selectedFirstPromotion).should('have.text','Selected')
    cy.get(Registrations.iWantThisOffer).should('be.visible')
    cy.get(Registrations.iWantThisOffer).should('have.css', 'color', 'rgb(17, 17, 17)')
    cy.get(Registrations.skip).click()
})
Cypress.Commands.add('verifyRegistrationForm',() => {
   cy.get(Registrations.form).should('be.visible')
    cy.get(Registrations.step).first().should('have.css','color','rgb(255, 255, 255)')
    cy.get(Registrations.firstName).should('be.visible')
    cy.get(Registrations.lastName).should('be.visible')
    cy.get(Registrations.email).should('be.visible')
    cy.get(Registrations.password).should('be.visible')
    cy.get(Registrations.day).should('be.visible')
    cy.get(Registrations.month).should('be.visible')
    cy.get(Registrations.year).should('be.visible')
    cy.get(Registrations.gender).should('be.visible')
    cy.get(Registrations.submit).should('have.css','color','rgb(17, 17, 17)')
    cy.wait(2000)
    cy.get(Registrations.submit).should('be.disabled')
})

 Cypress.Commands.add('fillRegistrationForm', () => {
    
    cy.get(Registrations.firstName).type(data.firstName)
    cy.get(Registrations.lastName).type(data.lastName)
    cy.get(Registrations.email).type(data.email)
    cy.get(Registrations.password).type(data.password)
    cy.get(Registrations.day).select('01')
    cy.get(Registrations.month).select('January')
    cy.get(Registrations.year).select('1995')
    cy.get(Registrations.gender).select('Male')
    cy.get(Registrations.submit).click()
 })

 Cypress.Commands.add('secondStepRegistration', () => {
    cy.get(Registrations.form).should('be.visible')
    cy.wait(2000)
    cy.get(Registrations.step).last().should('have.css','color','rgb(255, 255, 255)')
    cy.wait(2000)
    cy.get(Registrations.submit).should('be.disabled')
 })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })