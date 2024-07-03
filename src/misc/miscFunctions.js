const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
]

export function getMonthNameFromNum (monthNum) {
    return monthNames[monthNum];
}

export function getArrayOfCalendarDays (curDate) {
    let dayNums;
    const totalDays = getTotalDays(curDate);
    dayNums = getArrayOfDayNums(totalDays);
    dayNums = adjustCalendarStart(curDate, dayNums);
    dayNums = adjustCalendarEnd(curDate, totalDays, dayNums);
    return dayNums;
}

function getTotalDays (curDate) {
    return getDaysInMonth(curDate.getMonth(), curDate.getFullYear());
}

function getArrayOfDayNums (totalDays) {
    return Array.from({length: totalDays}, (x, i) => i + 1);
}

function adjustCalendarStart (curDate, dayNums) {
    const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const dayOfWeek = firstDay.getDay();
    const offset = dayOfWeek; //Number of empty days to insert to array
    for (let i = 0; i < offset; i++) {
        dayNums.unshift("0");
    }
    return dayNums;
}

function adjustCalendarEnd (curDate, totalDays, dayNums) {
    const lastDay = new Date(curDate.getFullYear(), curDate.getMonth(), totalDays);
    const dayOfWeek = lastDay.getDay();
    const offset =  6 - dayOfWeek;
    for (let i = 0; i < offset; i++) {
        dayNums.push("0");
    }
    return dayNums;
}

function getDaysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}