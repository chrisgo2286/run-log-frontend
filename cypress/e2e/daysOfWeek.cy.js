/// <reference types="cypress" />
const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "Saturday"
]

describe("Calendar Header", () => {
    beforeEach(() => {
        cy.login()
        cy.visit("/#/calendar")        
    })

    it("Days of Week displays correctly", () => {
        daysOfWeek.forEach((day) => {
            cy.get(`[data-cy=${day}]`).contains(day)
        })
    })
})    
