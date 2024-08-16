import { PeriodTypes } from "../components/calendar/calendarTypes";
import { DataTypes } from "../components/calendar/calendarTypes";

const monthNames = [
    "", "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
]

export function getMonthNameFromNum (monthNum: number): string {
    return monthNames[monthNum];
}

export function getPreviousPeriod (period: PeriodTypes): PeriodTypes {
    if (period.month === 1) {
        return {month: 12, year: period.year - 1};
    } else {
        return {month: period.month - 1, year: period.year};
    }
}

export function getNextPeriod (period: PeriodTypes): PeriodTypes {
    if (period.month === 12) {
        return {month: 1, year: period.year + 1}
    } else {
        return {month: period.month + 1, year: period.year}
    }
}

export function clearRunModalState (
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>
): void {
    setFields({
        id: "",
        date: "",
        run_type: "Easy Run",
        distance: "",
        time: "",
        comment: ""
    })
}

export function formatDistance (distance: number): string {
    const newDistance = Math.floor(distance)
    return `${newDistance} km`
}

export function formatTime (totalMinutes: number): string {
    const { hours, minutes } = convertMinutesToHours(totalMinutes)
    return `${hours} hours, ${minutes} minutes`
}

export function convertMinutesToHours (
    totalMinutes: number
): { hours: number, minutes: number } {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = Math.floor(totalMinutes % 60)
    return { hours, minutes } 
}

export function formatWeeklyAverage (weeklyAverage: string): string {
    const average = Math.trunc(parseFloat(weeklyAverage))
    return `${average} km / week`
}

export function formatMonthlyAverage (monthlyAverage: string): string {
    const average = Math.trunc(parseFloat(monthlyAverage))
    return `${average} km / month`    
}

export function formatPace (averagePace: number): string {
    const { minutes, seconds } = convertMinutesToMinAndSec(averagePace)
    return ( minutes > 0 || seconds > 0 ) ? `${minutes}:${seconds} / km` : "0 min / km"
}

export function convertMinutesToMinAndSec (
    totalMinutes: number
): {minutes: number, seconds: number} {
    const minutesInteger = Math.trunc(totalMinutes)
    const fractionOfMinutes = totalMinutes - minutesInteger
    const seconds = Math.round(fractionOfMinutes * 60)
    return { 'minutes': minutesInteger, 'seconds': seconds }
}

export function formatDateToString (date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export function getStartOfWeekDateObj (date: Date): Date {
    let firstDay = new Date()
    const dayOfWeek = date.getDay()
    return incrementDate(firstDay, -dayOfWeek)
}

export function incrementDate (date: Date, days: number): Date {
    date.setDate(date.getDate() + days)
    return new Date(date)
}
 
export function getPrevMonthName (date: Date): string {
    return getMonthNameFromNum(date.getMonth())
}

export function getNextMonthName (date: Date): string {
    return getMonthNameFromNum(date.getMonth() + 2)
}

export function getCurrentMonthName (date: Date): string {
    return getMonthNameFromNum(date.getMonth() + 1)
}

export function refreshPage (): void {
    window.location.reload()
}