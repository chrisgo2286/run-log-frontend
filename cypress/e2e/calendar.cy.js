/// <reference types="cypress" />

const curDate = new Date()
const lastDayOfMonth = new Date(curDate.getFullYear(), curDate.getMonth() + 2, 0)
const daysInMonth = lastDayOfMonth.getDate()

describe("Calendar Page", () => {
    beforeEach(() => {
        cy.login()
        cy.visit("/#/calendar")
    })

    it("Correct number of days displayed", () => {
        cy.get(`[data-cy=day-${daysInMonth}]`).contains(`${daysInMonths}`)
    })
})