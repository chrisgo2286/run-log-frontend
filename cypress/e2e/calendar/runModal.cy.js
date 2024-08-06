/// <reference types="cypress" />

const dayOneLink = "[data-cy=day-1]"
const dayTwoLink = "[data-cy=day-2]"
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
const submitBtn = "[data-cy=modal-submit-btn]"
const deleteBtn = "[data-cy=modal-delete-btn]"
const dateValue = "2024-08-01"
const runTypeValue = "Long Run"
const distanceValue = 15
const timeValue = 90
const commentValue = ""
const dateValue2 = "2024-08-02"
const runTypeValue2 = "Easy Run"
const newDateValue = "2024-08-02"
const newRunTypeValue = "Intervals"
const newDistanceValue = 8
const newTimeValue = 45
const newTimeValue2 = 50
const newCommentValue = "8 x 200RP" 

describe("RunModal", () => {
    beforeEach(() => {
        cy.loginToCalendar()
    })

    it("Elements display correctly for days with run entered", () => {
        cy.get(dayOneLink).click()
        cy.get(dateLabel).should('exist')
        cy.get(runTypeLabel).should('exist')
        cy.get(distanceLabel).should('exist')
        cy.get(timeLabel).should('exist')
        cy.get(commentLabel).should('exist')
        cy.get(dateField).should('have.value', dateValue)
        cy.get(runTypeField).should('have.value', runTypeValue)
        cy.get(distanceField).should('have.value', distanceValue)
        cy.get(timeField).should('have.value', timeValue)
        cy.get(commentField).should('have.value', commentValue)
        cy.get(submitBtn).should('exist')
        cy.get(deleteBtn).should('exist')
    })

    it("Elements display correctly for days without run entered", () => {
        cy.get(dayTwoLink).click()
        cy.get(dateField).should('have.value', dateValue2)
        cy.get(runTypeField).should('have.value', runTypeValue2)
        cy.get(submitBtn).should('exist')
        cy.get(deleteBtn).should('not.exist')
    })

    it("Creates and deletes a new run", () => {

        //Create Run
        cy.get(dayTwoLink).click()
        cy.get(dateField).type(newDateValue)
        cy.get(runTypeField).select(newRunTypeValue)
        cy.get(distanceField).type(newDistanceValue)
        cy.get(timeField).type(newTimeValue)
        cy.get(commentField).type(newCommentValue)
        cy.get(submitBtn).click()

        //Check new run created
        cy.get(dayTwoLink).click()
        cy.get(dateField).should('have.value', newDateValue)
        cy.get(runTypeField).should('have.value', newRunTypeValue)
        cy.get(distanceField).should('have.value', newDistanceValue)
        cy.get(timeField).should('have.value', newTimeValue)
        cy.get(commentField).should('have.value', newCommentValue)
        
        //Update run
        cy.get(timeField).clear().type(newTimeValue2)
        cy.get(submitBtn).click()

        //Check run updated
        cy.get(dayTwoLink).click()
        cy.get(timeField).should('have.value', newTimeValue2)

        //Delete run
        cy.get(deleteBtn).click()

        //Check run deleted
        cy.get(dayTwoLink).click()
        cy.get(runTypeField).should('have.value', runTypeValue2)
    })
})