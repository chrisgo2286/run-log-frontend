const monthNames = [
    "", "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
]

export function getMonthNameFromNum (monthNum) {
    return monthNames[monthNum];
}

export function getPreviousPeriod (period) {
    if (period.month === 1) {
        return {month: 12, year: period.year - 1};
    } else {
        return {month: period.month - 1, year: period.year};
    }
}

export function getNextPeriod (period) {
    if (period.month === 12) {
        return {month: 1, year: period.year + 1}
    } else {
        return {month: period.month + 1, year: period.year}
    }
}

export function clearRunModalState (setFields) {
    setFields({
        id: "",
        date: "",
        run_type: "Easy Run",
        distance: "",
        time: "",
        comment: ""
    })
}

export function formatTime (totalMinutes) {
    const { hours, minutes } = convertMinutesToHours(totalMinutes)
    return `${hours} hours, ${minutes} minutes`
}

export function convertMinutesToHours (totalMinutes) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return { hours, minutes } 
}

export function formatWeeklyAverage (weeklyAverage) {
    const average = Math.trunc(parseFloat(weeklyAverage))
    return `${average} km / week`
}

export function formatMonthlyAverage (monthlyAverage) {
    const average = Math.trunc(parseFloat(monthlyAverage))
    return `${average} km / month`    
}

export function formatPace (averagePace) {
    const { minutes, seconds } = convertMinutesToMinAndSec(averagePace)
    return ( minutes > 0 | seconds > 0 ) ? `${minutes}:${seconds} / km` : "0 min / km"
}

export function convertMinutesToMinAndSec (totalMinutes) {
    const minutesInteger = Math.trunc(totalMinutes)
    const fractionOfMinutes = totalMinutes - minutesInteger
    const seconds = Math.round(fractionOfMinutes * 60)
    return { 'minutes': minutesInteger, 'seconds': seconds }
}

export function formatDateToString (date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export function getStartOfWeekDateObj (date) {
    let firstDay = new Date()
    const dayOfWeek = date.getDay()
    // firstDay.setDate(date.getDate() - dayOfWeek)
    // return new Date(firstDay)
    return incrementDate(firstDay, -dayOfWeek)
}

export function incrementDate (date, days) {
    date.setDate(date.getDate() + days)
    return new Date(date)
}
    
export function refreshPage () {
    window.location.reload()
}