import { useState, useEffect } from "react";
import { getStartOfWeek } from "../../../misc/miscFunctions";
import { getWeeklyChartData } from "../../../misc/apiCalls";
import WeeklyChartBody from "./weeklyChartBody";
import WeeklyChartHeader from "./weeklyChartHeader";

export default function WeeklyChart () {
    const curDate = new Date()
    const [ startDate, setStartDate ] = useState(getStartOfWeek(curDate))
    const [ data, setData ] = useState()

    useEffect(() => {
        getWeeklyChartData(startDate).then((data) => setData(data))
    }, [ startDate ])

    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <WeeklyChartHeader startDate={ startDate } setStartDate={ setStartDate } />
            <WeeklyChartBody data={ data } />
        </div>
    )
}