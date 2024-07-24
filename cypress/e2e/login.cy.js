/// <reference types="cypress" />

const usernameField = '[data-cy=login-username]';
const passwordField = '[data-cy=login-password]';
const loginHeader = '[data-cy=login-header]';
const loginBtn = '[data-cy=login-btn]';
const validation = '[data-cy=validation]';
const username = 'tester';
const password = 'Cypress123';
const invalidUsername = 'tester2'
const homeUrl = 'http://localhost:3000/#/';

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/#/login');
    })

    it('Displays correctly', () => {
        cy.get(loginHeader).should('exist')
        cy.get(usernameField).should('exist')
        cy.get(passwordField).should('exist')
        cy.get(loginBtn).should('exist')
    })

    it('Fields can be input correctly', () => {
        cy.get(usernameField).type(username).should('have.value', username)
        cy.get(passwordField).type(password).should('have.value', password)
    })

    it('User can log in with correct credentials', () => {
        cy.get(usernameField).type(username)
        cy.get(passwordField).type(password)
        cy.get(loginBtn).click()
        cy.url().should('eq', homeUrl)
    })

    // it('User receives error message for empty credentials', () => {
    //     cy.get(loginBtn).click()
    //     cy.get(validation).should('include.text', 'Please enter your username!')
    //     cy.get(validation).should('include.text', 'Please enter your password!')
    // })

    // it('User receives error message for incorrect credentials', () => {
    //     cy.get(usernameField).type(invalidUsername)
    //     cy.get(passwordField).type(password)
    //     cy.get(loginBtn).click()
    //     cy.get(validation).should('have.text', 'You have entered invalid credentials!')
    // })
    
})