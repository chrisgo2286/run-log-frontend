import React, { useState } from 'react';
import CalendarHeader from "./calendarHeader";
import CalendarBody from './calendarBody';
import RunModal from './runModal/runModal';
import { postRun, patchRun } from '../../misc/apiCalls';
import { clearRunModalState } from '../../misc/miscFunctions';
import { RunDataTypes } from './calendarTypes';
import { validateRunModalFields } from './runModal/runModalValidation';
import { useGetPeriod, useGetCalendar } from '../../misc/hooks';
import { CurrentWindowContext, DataContext, PeriodContext, RunErrorsContext, RunFieldsContext } from '../../misc/context';

export type CurrentWindowTypes = "calendar" | "runModal" | "deleteRunModal"

export default function Calendar (): JSX.Element {
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
        const result = validateRunModalFields(newFields)
        if (result === "Valid") {
            submitRun(newFields);
        } else {
            setRunErrors(result);
        }
    }

    function submitRun (newFields: RunDataTypes): void {
        (runFields.id === "") ? postRun(newFields) : patchRun(newFields);   
        setCurrentWindow("calendar")
        clearRunModalState(setRunFields);
        setRunErrors([]);
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
            <main onClick={ handleCloseModal } className={ (currentWindow !== "calendar") ? "h-screen relative blur-sm": "h-screen relative"}>
                <div className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
                    <DataContext.Provider value={{ data, setUpdateRequired }}>
                    <PeriodContext.Provider value={{ period, setPeriod }}>
                        <CalendarHeader />
                        <CalendarBody />
                    </PeriodContext.Provider>            
                    </DataContext.Provider>
                                    
                </div>
            </main>
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