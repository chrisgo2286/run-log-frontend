/// <reference types="cypress" />
import { 
    getCurrentMonthName, 
    getPrevMonthName, 
    getNextMonthName 
} from "../../src/misc/miscFunctions"

const profileLink = "[data-cy=profile-link]"
const prevBtn = "[data-cy=monthly-stats-previous]"
const header = "[data-cy=monthly-stats-header]"
const nextBtn = "[data-cy=monthly-stats-next]"
const curDate = new Date()

describe("Monthly Stats Header", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })

    it("Displays correctly", () => {
        cy.get(prevBtn).should("exist")
        cy.get(header).should("exist")
        cy.get(nextBtn).should("exist")
    })

    it("Should display correct month", () => {
        const curMonthName = getCurrentMonthName(curDate)
        cy.get(header).contains(curMonthName)
    })

    it("Should display previous month on click", () => {
        const prevMonthName = getPrevMonthName(curDate)
        cy.get(prevBtn).click()
        cy.get(header).contains(prevMonthName)
    })

    it("Should display next month on click", () => {
        const nextMonthName = getNextMonthName(curDate)
        cy.get(nextBtn).click()
        cy.get(header).contains(nextMonthName)
    })
})
