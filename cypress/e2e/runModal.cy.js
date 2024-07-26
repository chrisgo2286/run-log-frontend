/// <reference types="cypress" />

const dayOneLink = "[data-cy=day-1]"
const dateLabel = "[data-cy=date-label]"
const runTypeLabel = "[data-cy=run-type-label]"
const distanceLabel = "[data-cy=distance-label]"
const timeLabel = "[data-cy=time-label]"
const commentLabel = "[data-cy=comment-label]"
const dateField = "[data-cy=date-field]"
const runTypeField = "[data-cy=run-type-field]"
const distanceField = "[data-cy=distance-field]"
const timeField = "[data-cy=time-field]"
const commentField = "[data-cy=comment-field]"

describe("RunModal", () => {
    beforeEach(() => {
        cy.loginToCalendar()
        cy.get(dayOneLink).click()
    })

    it("Elements display correctly", () => {
        cy.get(dateLabel).should('exist')
        cy.get(runTypeLabel).should('exist')
        cy.get(distanceLabel).should('exist')
        cy.get(timeLabel).should('exist')
        cy.get(commentLabel).should('exist')
        cy.get(dateField).should('exist')
        cy.get(runTypeField).should('exist')
        cy.get(distanceField).should('exist')
        cy.get(timeField).should('exist')
        cy.get(commentField).should('exist')
    })
})