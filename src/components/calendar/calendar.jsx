import { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import Day from "./day";
import { getArrayOfCalendarDays, getMonthNameFromNum } from "../../misc/miscFunctions";
import { getCalendar } from '../../misc/apiCalls';

export default function Calendar () {
    const curDate = new Date();
    const monthName = getMonthNameFromNum(curDate.getMonth());
    const dayNums = getArrayOfCalendarDays(curDate);
    const [ data, setData ] = useState([])

    useEffect(() => {
        getCalendar(7, 2024).then(data => setData(data))
    }, [])

    function getData (dayNum) {
        const runData = data.filter((run) => {
            const newDate = new Date(run)
            console.log(newDate.getDate())
            return newDate.getDate() === dayNum;
        })
    }
    
    return (
        <main className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
            <CalendarHeader monthName={ monthName } />
            <DaysOfTheWeek />
            <div className="grid grid-cols-7 border border-solid border-gray-200">
                { dayNums.map((dayNum, ndx) => (
                    <Day 
                        key={ dayNum + ndx } 
                        dayNum={ dayNum } 
                        data={ getData(dayNum) } /> 
                ))}
            </div>
            
        </main>
    )
}