import React, { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import RunModal from './runModal';
import Day from "./day";
import { getCalendar, postRun } from '../../misc/apiCalls';

export default function Calendar () {
    const curDate = new Date();
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState([])
    const [ fields, setFields ] = useState({
        date: "",
        run_type: "",
        distance: "",
        time: "",
        comment: ""
    })
    const [ modalVisible, setModalVisible ] = useState(false)
    const [ updateRequired, setUpdateRequired ] = useState(false)

    useEffect(() => {
        getCalendar(period.month, period.year).then(data => setData(data))
        setUpdateRequired(false);
    }, [period, updateRequired])
    
    function handleCloseModal () {
        setModalVisible(false);
        setFields({
            date: "",
            run_type: "Easy Run",
            distance: 0,
            time: 0,
            comment: ""
        })
    }

    function createNewRun () {
        postRun(fields);
        setModalVisible(false);
        setUpdateRequired(true);
        setFields({
            date: "",
            run_type: "",
            distance: "",
            time: "",
            comment: ""
        })
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
                                setModalVisible={ setModalVisible }
                                setFields={ setFields } /> 
                        ))}
                    </div>
                </div>
            </main>
            <RunModal 
                modalVisible={ modalVisible } 
                fields={ fields }
                setFields={ setFields } 
                createNewRun={ createNewRun }/>            
        </React.Fragment>
    )
}