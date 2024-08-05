/// <reference types="cypress" />

const profileLink = "[data-cy=monthly-stats]"

describe("Monthly Stats", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })

    it("Displays correctly", () => {
        
    })
})