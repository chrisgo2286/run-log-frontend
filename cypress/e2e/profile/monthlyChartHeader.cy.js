/// <reference types="cypress" />
import { 
    getCurrentMonthName, 
    getPrevMonthName, 
    getNextMonthName 
} from "../../../src/misc/miscFunctions"

const profileLink = "[data-cy=profile-link]"
const prevBtn = "[data-cy=monthly-chart-previous]"
const header = "[data-cy=monthly-chart-header]"
const nextBtn = "[data-cy=monthly-chart-next]"
const curDate = new Date()

describe("Monthly Chart Header", () => {
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
