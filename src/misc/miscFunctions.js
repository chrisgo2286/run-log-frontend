const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
]

export function getMonthNameFromNum (monthNum) {
    return monthNames[monthNum];
}

export function getArrayOfDayNums (curDate) {
    const totalDays = getTotalDays(curDate);
    return Array.from({length: totalDays}, (x, i) => i + 1);
}

export function getTotalDays (curDate) {
    return getDaysInMonth(curDate.getMonth(), curDate.getFullYear());
}

export function getDaysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}