import React, { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import RunModal from './runModal';
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
    
    function handleCloseModal () {
        setModalVisible(false);
    }
    return (
        <React.Fragment>
            <main onClick={ handleCloseModal } className={ (modalVisible) ? "h-screen relative blur-sm": "h-screen relative"}>
                <div className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
                    <CalendarHeader period={ period } setPeriod={ setPeriod }/>
                    <DaysOfTheWeek />
                    <div className="grid grid-cols-7 border border-solid border-gray-200">
                        { data.map((dataItem, ndx) => (
                            <Day 
                                key={ dataItem.day + ndx } 
                                data={ dataItem }
                                modalVisible={ modalVisible }
                                setModalVisible={ setModalVisible } /> 
                        ))}
                    </div>
                </div>
            </main>
            <RunModal modalVisible={ modalVisible }/>            
        </React.Fragment>
    )
}