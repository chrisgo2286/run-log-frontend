/// <reference types="cypress" />

const loginLink = "[data-cy=login-link]"
const registerLink = "[data-cy=register-link]"
const profileLink = "[data-cy=profile-link]"
const calendarLink = "[data-cy=calendar-link]"
const logoutLink = "[data-cy=logout-link]"
const greeting = "[data-cy=greeting]"
const greetingText = "Hi tester!"
const homeUrl = 'http://localhost:3000/#'
const loginUrl = 'http://localhost:3000/#/login'
const registrationUrl = 'http://localhost:3000/#/registration'
const profileUrl = 'http://localhost:3000/#/profile'
const calendarUrl = 'http://localhost:3000/#/calendar'

describe("Navbar", () => {
    beforeEach(() => {
        cy.visit(homeUrl)
    })

    it("Displays correctly when logged out", () => {
        cy.get(loginLink).should("exist")
        cy.get(registerLink).should("exist")  
    })

    it("Displays correctly when logged in", () => {
        cy.login()
        cy.get(profileLink).should("exist")
        cy.get(calendarLink).should("exist")
        cy.get(logoutLink).should("exist")
        cy.get(greeting).contains(greetingText)
    })

    it("Login link navigates user to Login Page", () => {
        cy.get(loginLink).click()
        cy.url().should('eq', loginUrl)
    })

    it("Register link navigates to Registration Page", () => {
        cy.get(registerLink).click()
        cy.url().should('eq', registrationUrl)
    })

    it("Profile link navigates user to Profile Page", () => {
        cy.login()
        cy.get(profileLink).click()
        cy.url().should('eq', profileUrl)
    })

    it("Calendar link navigates to Calendar Page", () => {
        cy.login()
        cy.get(calendarLink).click()
        cy.url().should('eq', calendarUrl)
    })


})