/// <reference types="cypress" />

const curDate = new Date()
const lastDayOfMonth = new Date(curDate.getFullYear(), curDate.getMonth() + 2, 0)
const daysInMonth = lastDayOfMonth.getDate()
const calendarLink = "[data-cy=calendar-link]"

describe("Calendar Page", () => {
    beforeEach(() => {
        cy.login()
        cy.get(calendarLink).click()
    })

    it("Correct number of days displayed", () => {
        cy.get(`[data-cy=day-${daysInMonth}]`).contains(`${daysInMonth}`)
    })
})