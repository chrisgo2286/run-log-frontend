import React, { ReactElement } from "react";
import { DataObjectType, DayProps } from "./calendarTypes";

export default function Day ({ 
    data, 
    modalVisible, 
    setModalVisible,
    fields,
    setFields 
    }: DayProps): JSX.Element {
    
    function handleClassName (): string {
        return (data.day === "0") ? "opacity-0": "h-20 p-1 border border-solid border-gray-200 hover:bg-gray-100 cursor-pointer";
    }

    function handleBody (): null | JSX.Element {
        return (data.hasOwnProperty('id')) ? <RunDetails data={ data } /> : null;
    }

    function handleClick (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (!modalVisible) {
            event.stopPropagation();
            updateFields();
            setModalVisible(true);
        }
    }

    function updateFields (): void {
        if (data.id) {
            setFields(data);
        } else {
            const newFields = { ...fields, 'date': data.date }
            setFields(newFields);
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

function RunDetails ({ data }: DataObjectType): JSX.Element {
    return (
        <React.Fragment>
            <div className="text-xs text-center">{ data.run_type }</div>
            <div className="text-xs text-center">{ data.distance }km</div>
            <div className="text-xs text-center">{ data.time }min</div>
        </React.Fragment>
    )
}