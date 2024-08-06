/// <reference types="cypress" />

const profileLink = "[data-cy=profile-link]"
const distance = "[data-cy=yearly-stats-distance]"
const time = "[data-cy=yearly-stats-time]"
const weeklyAverage = "[data-cy=yearly-stats-weekly-average]"
const monthlyAverage = "[data-cy=yearly-stats-monthly-average]"
const pace = "[data-cy=yearly-stats-pace]"
const distanceText = "15 km"
const timeText = "1 hours, 30 minutes"
const weeklyAverageText = "0 km / week"
const monthlyAverageText = "2 km / month"
const paceText = "6:0 / km"

describe("Monthly Stats Body", () => {
    beforeEach(() => {
        cy.login()
        cy.get(profileLink).click()
    })

    it("Should display elements correctly", () => {
        cy.get(distance).contains(distanceText)
        cy.get(time).contains(timeText)
        cy.get(monthlyAverage).contains(monthlyAverageText)
        cy.get(weeklyAverage).contains(weeklyAverageText)
        cy.get(pace).contains(paceText)
    })
})