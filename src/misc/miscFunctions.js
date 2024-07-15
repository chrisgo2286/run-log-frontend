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