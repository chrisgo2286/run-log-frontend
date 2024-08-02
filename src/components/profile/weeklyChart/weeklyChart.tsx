import { useState, useEffect } from "react";
import { getStartOfWeekDateObj, formatDateToString } from "../../../misc/miscFunctions";
import { getWeeklyChartData } from "../../../misc/apiCalls";
import WeeklyChartBody from "./weeklyChartBody";
import WeeklyChartHeader from "./weeklyChartHeader";
import { DataItem } from "./weeklyChartTypes";

export default function WeeklyChart (): JSX.Element {
    const curDate = new Date()
    const [ startDateObj, setStartDateObj ] = useState<Date>(getStartOfWeekDateObj(curDate))
    const [ data, setData ] = useState<DataItem[]>()

    useEffect(() => {
        const dateString = formatDateToString(startDateObj)
        getWeeklyChartData(dateString).then((data) => setData(data))
    }, [ startDateObj ])

    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <WeeklyChartHeader startDateObj={ startDateObj } setStartDateObj={ setStartDateObj } />
            <WeeklyChartBody data={ data } />
        </div>
    )
}