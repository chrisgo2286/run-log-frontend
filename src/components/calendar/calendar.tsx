import React, { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import RunModal from './runModal/runModal';
import CalendarDays from './calendarDays';
import { getCalendar, postRun, patchRun } from '../../misc/apiCalls';
import { clearRunModalState } from '../../misc/miscFunctions';
import { FieldsTypes, PeriodTypes, DataTypes } from './calendarTypes';

export default function Calendar (): JSX.Element {
    const curDate = new Date();
    const [ period, setPeriod ] = useState<PeriodTypes>({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState<DataTypes[]>([])
    const [ fields, setFields ] = useState<FieldsTypes>({
        id: "",
        date: "",
        run_type: "Easy Run",
        distance: "",
        time: "",
        comment: ""
    })
    const [ modalVisible, setModalVisible ] = useState<boolean>(false)
    const [ updateRequired, setUpdateRequired ] = useState<boolean>(false)

    useEffect(() => {
        getCalendar(period.month, period.year).then(data => setData(data))
        setUpdateRequired(false);
    }, [period, updateRequired])
    
    function handleCloseModal (): void {
        setModalVisible(false);
        clearRunModalState(setFields);
    }

    function submitRun (): void {
        (fields.id === "") ? postRun(fields) : patchRun(fields);   
        setModalVisible(false);
        clearRunModalState(setFields);
        setUpdateRequired(true);
    }

    return (
        <React.Fragment>
            <main onClick={ handleCloseModal } className={ (modalVisible) ? "h-screen relative blur-sm": "h-screen relative"}>
                <div className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
                    <CalendarHeader period={ period } setPeriod={ setPeriod }/>
                    <DaysOfTheWeek />
                    <CalendarDays 
                        data={ data }
                        modalVisible={ modalVisible }
                        setModalVisible={ setModalVisible }
                        setFields={ setFields } />
                </div>
            </main>
            <RunModal 
                modalVisible={ modalVisible } 
                fields={ fields }
                setFields={ setFields } 
                submitRun={ submitRun }/>            
        </React.Fragment>
    )
}