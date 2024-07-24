/// <reference types="cypress" />

const usernameField = '[data-cy=login-username]';
const passwordField = '[data-cy=login-password]';
const loginBtn = '[data-cy=login-btn]';
const username = 'tester';
const password = 'Cypress123';

Cypress.Commands.add('login', () => {
    cy.visit('/#/login')
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginBtn).click()
})