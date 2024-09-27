import React, { useState, useEffect } from 'react';
import CalendarHeader from "./calendarHeader";
import CalendarBody from './calendarBody';
import RunModal from './runModal/runModal';
import { getCalendar, postRun, patchRun } from '../../misc/apiCalls';
import { clearRunModalState } from '../../misc/miscFunctions';
import { PeriodTypes, DataTypes, RunDataTypes } from './calendarTypes';
import { validateRunModalFields } from './runModal/runModalValidation';

export default function Calendar (): JSX.Element {
    const curDate = new Date();
    const [ period, setPeriod ] = useState<PeriodTypes>({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState<DataTypes>({
        runData: [],
        weeklyTotals: []
    })
    const [ fields, setFields ] = useState<RunDataTypes>({
        id: "",
        date: "",
        run_type: "Easy Run",
        distance: "",
        hours: "",
        minutes: "",
        seconds: "",
        comment: ""
    })

    const [ modalVisible, setModalVisible ] = useState<boolean>(false)
    const [ updateRequired, setUpdateRequired ] = useState<boolean>(false)
    const [ errors, setErrors ] = useState<string[]>([])

    useEffect(() => {
        getCalendar(period.month, period.year).then(data => setData(data))
        setUpdateRequired(false);
    }, [period, updateRequired])
    
    function handleCloseModal (): void {
        setModalVisible(false);
        clearRunModalState(setFields);
        setErrors([])
    }

    function handleSubmitRun () {
        const newFields = cleanInput();
        const result = validateRunModalFields(newFields)
        if (result === "Valid") {
            submitRun(newFields);
        } else {
            setErrors(result);
        }
    }

    function submitRun (newFields: RunDataTypes): void {
        (fields.id === "") ? postRun(newFields) : patchRun(newFields);   
        setModalVisible(false);
        clearRunModalState(setFields);
        setErrors([]);
        setUpdateRequired(true);
    }

    function cleanInput (): RunDataTypes {
        return {
            id: fields.id,
            date: fields.date,
            run_type: fields.run_type,
            distance: (fields.distance) ? fields.distance.toString() : "0",
            hours: (fields.hours) ? fields.hours.toString() : "0",
            minutes: (fields.minutes) ? fields.minutes.toString() : "0",
            seconds: (fields.seconds) ? fields.seconds.toString() : "0",
            comment: fields.comment
        }
    }

    return (
        <React.Fragment>
            <main onClick={ handleCloseModal } className={ (modalVisible) ? "h-screen relative blur-sm": "h-screen relative"}>
                <div className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
                    <CalendarHeader period={ period } setPeriod={ setPeriod }/>
                    <CalendarBody 
                        data={ data }
                        modalVisible={ modalVisible }
                        setModalVisible={ setModalVisible }
                        fields={ fields }
                        setFields={ setFields }/>                        
                </div>
            </main>
            <RunModal 
                modalVisible={ modalVisible } 
                fields={ fields }
                setFields={ setFields }
                errors={ errors } 
                handleSubmitRun={ handleSubmitRun }/>            
        </React.Fragment>
    )
}