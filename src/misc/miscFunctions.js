const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
]

export function getMonthNameFromNum (monthNum) {
    return monthNames[monthNum];
}

export function getArrayOfDayNums (curDate) {
    const totalDays = getTotalDays(curDate);
    const dayNums = Array.from({length: totalDays}, (x, i) => i + 1);

    const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const dayOfWeekFirstDay = firstDay.getDay();
    const offsetFirstDay = dayOfWeekFirstDay; //Number of empty days to insert to array
    for (let i = 0; i < offsetFirstDay; i++) {
        dayNums.unshift("0");
    }

    const lastDay = new Date(curDate.getFullYear(), curDate.getMonth(), totalDays);
    const dayOfWeekLastDay = lastDay.getDay();
    const offsetLastDay =  6 - dayOfWeekLastDay;
    for (let i = 0; i < offsetLastDay; i++) {
        dayNums.push("0");
    }

    return dayNums;
}

export function getTotalDays (curDate) {
    return getDaysInMonth(curDate.getMonth(), curDate.getFullYear());
}

export function getDaysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}