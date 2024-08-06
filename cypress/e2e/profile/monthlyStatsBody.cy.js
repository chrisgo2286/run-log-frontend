/// <reference types="cypress" />

const profileLink = "[data-cy=profile-link]"
const distance = "[data-cy=monthly-stats-distance]"
const time = "[data-cy=monthly-stats-time]"
const weeklyAverage = "[data-cy=monthly-stats-weekly-average]"
const pace = "[data-cy=monthly-stats-pace]"
const distanceText = "15 km"
const timeText = "1 hours, 30 minutes"
const weeklyAverageText = "17 km / week"
const paceText = "6:0 / km"

describe("Monthly Stats Body", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })

    it("Should display elements correctly", () => {
        cy.get(distance).contains(distanceText)
        cy.get(time).contains(timeText)
        cy.get(weeklyAverage).contains(weeklyAverageText)
        cy.get(pace).contains(paceText)
    })
})