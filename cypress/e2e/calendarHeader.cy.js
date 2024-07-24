/// <reference types="cypress" />
import { getMonthNameFromNum } from "../../src/misc/miscFunctions"

const prevMonth = "[data-cy=calendar-header-previous-month]"
const nextMonth = "[data-cy=calendar-header-next-month]"
const period = "[data-cy=calendar-header-period]"
const curDate = new Date()
const curMonthName = getMonthNameFromNum(curDate.month + 1)
const curYear = curDate.getFullYear()
const prevMonthName = getMonthNameFromNum(curDate.month)
const prevMonthYear = curDate.setDate(0).getFullYear()
const nextMonthName = getMonthNameFromNum(curDate.month + 2) 
const nextMonthYear = curDate.setDate(32).getFullYear()

describe("Calendar Header", () => {
    beforeEach(() => {
        cy.login()
        cy.visit("/#/calendar")        
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
        cy.get(period).contains(`${prevMonthName} ${prevMonthYear}`)
    })

    it("Next Month returns correct period", () => {
        cy.get(nextMonth).click()
        cy.get(period).contains(`${nextMonthName} ${nextMonthYear}`)
    })
})