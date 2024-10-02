import Day from "./day";
import { useContext } from "react";
import { DataContext } from "../../../misc/context";

export default function CalendarDays (): JSX.Element {

    const { data } = useContext(DataContext)

    return (
        <div className="grid grid-cols-7">
            { data.runData.map((dataItem, ndx) => (
                <Day 
                    key={ (dataItem.day) ? dataItem.day + ndx: ndx } 
                    data={ dataItem } /> 
            ))}
        </div>
    )
}