import { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import Day from "./day";
import { getCalendar } from '../../misc/apiCalls';

export default function Calendar () {
    const curDate = new Date();
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState([])
    const [ modalVisible, setModalVisible ] = useState(false)

    useEffect(() => {
        getCalendar(period.month, period.year).then(data => setData(data))
    }, [period])
    
    return (
        <main className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
            <CalendarHeader period={ period } setPeriod={ setPeriod }/>
            <DaysOfTheWeek />
            <div className="grid grid-cols-7 border border-solid border-gray-200">
                { data.map((dataItem, ndx) => (
                    <Day 
                        key={ dataItem.day + ndx } 
                        data={ dataItem } /> 
                ))}
            </div>
            
        </main>
    )
}