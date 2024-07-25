/// <reference types="cypress" />

const calendarLink = "[data-cy=calendar-link]"
const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "Saturday"
]

describe("Calendar Header", () => {
    beforeEach(() => {
        cy.login()
        cy.get(calendarLink).click()      
    })

    it("Days of Week displays correctly", () => {
        daysOfWeek.forEach((day) => {
            cy.get(`[data-cy=${day}]`).contains(day)
        })
    })
})    
