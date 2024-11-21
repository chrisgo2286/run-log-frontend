import React, { useState } from 'react';
import RunModal from './runModal/runModal';
import { postRun, patchRun } from '../../misc/apiCalls';
import { clearRunModalState } from '../../misc/miscFunctions';
import { RunDataTypes } from './calendarTypes';
import { validateRunModalFields } from './runModal/runModalValidation';
import { useGetCalendar } from '../../misc/hooks/useGetCalendar';
import { useGetPeriod } from '../../misc/hooks/useGetPeriod';
import Calendar from './calendar/calendar';
import { 
    CurrentWindowContext, 
    DataContext, 
    RunErrorsContext, 
    RunFieldsContext, 
    PeriodContext 
} from '../../misc/context';

export type CurrentWindowTypes = "calendar" | "runModal" | "deleteRunModal"

export default function CalendarPage (): JSX.Element {
    
    const { period, setPeriod } = useGetPeriod()
    const { data, setUpdateRequired } = useGetCalendar(period)
    const [ runFields, setRunFields ] = useState<RunDataTypes>(blankRunFields)
    const [ currentWindow, setCurrentWindow ] = useState<CurrentWindowTypes>("calendar")
    const [ runErrors, setRunErrors ] = useState<string[]>([])

    function handleCloseModal (): void {
        setCurrentWindow("calendar")
        clearRunModalState(setRunFields);
        setRunErrors([])
    }

    function handleSubmitRun () {
        const newFields = cleanInput();
        const result = validateRunModalFields(newFields);
        ( result === "Valid" ) ? submitRun(newFields) : setRunErrors(result);
    }

    function submitRun (newFields: RunDataTypes): void {
        (runFields.id === "") ? postRun(newFields) : patchRun(newFields);   
        handleCloseModal()
        setUpdateRequired(true);
    }

    function cleanInput (): RunDataTypes {
        return {
            id: runFields.id,
            date: runFields.date,
            run_type: runFields.run_type,
            distance: (runFields.distance) ? runFields.distance.toString() : "0",
            hours: (runFields.hours) ? runFields.hours.toString() : "0",
            minutes: (runFields.minutes) ? runFields.minutes.toString() : "0",
            seconds: (runFields.seconds) ? runFields.seconds.toString() : "0",
            comment: runFields.comment
        }
    }

    return (
        <React.Fragment>
            <RunFieldsContext.Provider value={{ runFields, setRunFields }}>
                <CurrentWindowContext.Provider value={{ currentWindow, setCurrentWindow }}>
                    <PeriodContext.Provider value={{ period, setPeriod }}>
                        <DataContext.Provider value={{ data, setUpdateRequired }}>
                               
                            <Calendar handleCloseModal={ handleCloseModal }/>
                        
                        </DataContext.Provider>
                    </PeriodContext.Provider>     
                    <RunErrorsContext.Provider value={{ runErrors, setRunErrors }}>
                        
                        <RunModal handleSubmitRun={ handleSubmitRun }/>           
                    
                    </RunErrorsContext.Provider>
                </CurrentWindowContext.Provider>
            </RunFieldsContext.Provider>   
        </React.Fragment>
    )
}

export const blankRunFields = {
    id: "",
    date: "",
    run_type: "Easy Run",
    distance: "",
    hours: "",
    minutes: "",
    seconds: "",
    comment: ""
}