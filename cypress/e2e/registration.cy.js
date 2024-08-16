/// <reference types="cypress" />

const registrationHeader = '[data-cy=registration-header]';
const usernameField = '[data-cy=registration-username]';
const password1Field = '[data-cy=registration-password1]';
const password2Field = '[data-cy=registration-password2]';
const registrationBtn = '[data-cy=registration-btn]';
const validation = '[data-cy=validation]';
const username = 'tester';
const password = 'Cypress123';

describe('Registration Page', () => {
    beforeEach(() => {
        cy.visit('/#/registration')
    })
    it('Displays correctly', () => {
        cy.get(usernameField).should('exist')
        cy.get(password1Field).should('exist')
        cy.get(password2Field).should('exist')
    })
    it('Fields can be input correctly', () => {
        cy.get(usernameField).type(username).should('have.value', username)
        cy.get(password1Field).type(password).should('have.value', password)
        cy.get(password2Field).type(password).should('have.value', password)
    })
    it('User receives error message for empty fields', () => {
        cy.get(registrationBtn).click()
        cy.get(validation).should('include.text', 'Please enter a Username!')
        cy.get(validation).should('include.text', 'Please enter a Password!')
        cy.get(validation).should('include.text', 'Please reenter your Password!')
    })
    it('User receives error message for mismatched passwords', () => {
        cy.get(password1Field).type(password)
        cy.get(password2Field).type(username)
        cy.get(registrationBtn).click()
        cy.get(validation).should('include.text', 'The passwords do not match!')
    })
})