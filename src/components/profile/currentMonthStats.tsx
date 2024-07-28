import { useState } from "react";
import { MonthlyStatsProps, MonthlyStatsTypes } from "./profileTypes";
import { getMonthNameFromNum, getNextPeriod, getPreviousPeriod } from "../../misc/miscFunctions";

export default function CurrentMonthStats (): JSX.Element {

    const curDate = new Date()
    
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth(),
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState<MonthlyStatsTypes>()

    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <div className="text-center font-">{ data?.current_month }</div>
            <div>Total Distance - { data?.total_distance }km</div>
            <div>Total Time - { data?.total_time }hours</div>
            <div>Weekly Average - { data?.weekly_average }</div>
            <div>Average Pace - { data?.average_pace }min/km</div>
        </div>
    )
}