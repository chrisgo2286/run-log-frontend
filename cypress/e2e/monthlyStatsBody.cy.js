/// <reference types="cypress" />

const profileLink = "[data-cy=profile-link]"

describe("Monthly Stats Body", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })
})