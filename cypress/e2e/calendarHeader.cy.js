/// <reference types="cypress" />
import { getMonthNameFromNum } from "../../src/misc/miscFunctions"

const prevMonth = "[data-cy=calendar-header-previous-month]"
const nextMonth = "[data-cy=calendar-header-next-month]"
const period = "[data-cy=calendar-header-period]"
const curDate = new Date()
const curMonthName = getMonthNameFromNum(curDate.getMonth() + 1)
const curYear = curDate.getFullYear()
const prevMonthName = getMonthNameFromNum(curDate.getMonth())
const nextMonthName = getMonthNameFromNum(curDate.getMonth() + 2) 
const calendarLink = "[data-cy=calendar-link]"

describe("Calendar Header", () => {
    beforeEach(() => {
        cy.login()
        cy.get(calendarLink).click()     
    })
    
    it("Displays Correctly", () => {
        cy.get(prevMonth).should("exist")
        cy.get(nextMonth).should("exist")
        cy.get(period).should("exist")
    })

    it("Correct period is shown", () => {
        cy.get(period).contains(`${curMonthName} ${curYear}`)
    })

    it("Previous Month returns correct period", () => {
        cy.get(prevMonth).click()
        const year = new Date(curDate.setDate(0)).getFullYear()
        cy.get(period).contains(`${prevMonthName} ${year}`)
    })

    it("Next Month returns correct period", () => {
        cy.get(nextMonth).click()
        // let nextMonthDate = curDate.setDate(32)
        const year = new Date(curDate.setDate(32)).getFullYear()
        cy.get(period).contains(`${nextMonthName} ${year}`)
    })
})