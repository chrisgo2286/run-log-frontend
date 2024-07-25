/// <reference types="cypress" />

const usernameField = '[data-cy=login-username]';
const passwordField = '[data-cy=login-password]';
const loginBtn = '[data-cy=login-btn]';
const calendarLink = '[data-cy=calendar-link]';
const username = 'tester';
const password = 'Cypress123';

Cypress.Commands.add('login', () => {
    cy.visit('/#/login')
    cy.get(usernameField).type(username)
    cy.get(passwordField).type(password)
    cy.get(loginBtn).click()
})

Cypress.Commands.add('loginToCalendar', () => {
    cy.login()
    cy.get(calendarLink).click()
})