/// <reference types="cypress" />

const profileLink = "[data-cy=profile-link]"
const prevBtn = "[data-cy=yearly-stats-previous]"
const header = "[data-cy=yearly-stats-header]"
const nextBtn = "[data-cy=yearly-stats-next]"
const curDate = new Date()

describe("Yearly Stats Header", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })

    it("Displays correctly", () => {
        cy.get(prevBtn).should("exist")
        cy.get(header).should("exist")
        cy.get(nextBtn).should("exist")
    })

    it("Should display correct year", () => {
        cy.get(header).contains(curDate.getFullYear())
    })

    it("Should display previous year on click", () => {
        cy.get(prevBtn).click()
        cy.get(header).contains(curDate.getFullYear() - 1)
    })

    it("Should display next month on click", () => {
        cy.get(nextBtn).click()
        cy.get(header).contains(curDate.getFullYear() + 1)
    })
})