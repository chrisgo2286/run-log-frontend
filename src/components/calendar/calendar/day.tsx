import React, { useContext } from "react";
import { RunDataObjectType, RunDataTypes } from "../calendarTypes";
import { CurrentWindowContext, RunFieldsContext } from "../../../misc/context";

export type DayProps = {
    data: RunDataTypes,
}

export default function Day ({ 
    data
    }: DayProps): JSX.Element {
    
    const { runFields, setRunFields } = useContext(RunFieldsContext)
    const { currentWindow, setCurrentWindow } = useContext(CurrentWindowContext)
    
    function handleClassName (): string {

        const isFutureDate = checkIfFutureDate()
        if (data.day === "0") {
            return "opacity-0";
        } else if (isFutureDate === true) {
            return "bg-gray-100 h-20 p-1 border border-solid border-gray-200 hover:bg-gray-200 cursor-pointer"
        } else {
            return "h-20 p-1 border border-solid border-gray-200 hover:bg-gray-100 cursor-pointer"
        }
    }

    function checkIfFutureDate (): boolean {
        const curDate = new Date()
    
        if(data.date) {
            const dataDate = dateStringToObject(data.date)
            if(dataDate >= curDate) {
                return true;
            }
        }
        return false;
    }

    function dateStringToObject (dateString: string): Date {
        const dateArray = dateString.split("-")
        return new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]))
    }

    function handleBody (): null | JSX.Element {
        return (data.hasOwnProperty('id')) ? <RunDetails data={ data } /> : null;
    }

    function handleClick (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (currentWindow !== "runModal") {
            event.stopPropagation();
            updateFields();
            setCurrentWindow("runModal");
        }
    }

    function updateFields (): void {
        if (data.id) {
            setRunFields(data);
        } else {
            const newFields = { ...runFields, 'date': data.date }
            setRunFields(newFields);
        }
    }

    return (
        <div 
            className={ handleClassName() } 
            onClick={ handleClick }
            data-cy={ `day-${data.day}`}>
            <div className="text-xs">{ data.day }</div>
            { handleBody() }
        </div>
    )
}

function RunDetails ({ data }: RunDataObjectType): JSX.Element {

    function formatTime () {
        const hours = ( data.hours ) ? `${ data.hours }:` : ""
        const minutes = `${ data.minutes }:`
        const seconds = ( data.seconds ) ? `${ data.seconds }` : "00"
        return `${ hours }${ minutes }${ seconds }`
    }

    return (
        <React.Fragment>
            <div className="text-xs text-center">{ data.run_type }</div>
            <div className="text-xs text-center">{ data.distance }km</div>
            <div className="text-xs text-center">{ formatTime() }</div>
        </React.Fragment>
    )
}