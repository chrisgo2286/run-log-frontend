import { useState, useEffect } from "react";
import { MonthlyStatsTypes } from "./monthlyStatsTypes";
import { getMonthlyStats } from "../../../misc/apiCalls";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { MonthlyStatsPeriod } from "./monthlyStatsTypes";

export default function CurrentMonthStats (): JSX.Element {

    const curDate = new Date()
    const [ period, setPeriod ] = useState<MonthlyStatsPeriod>({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState<MonthlyStatsTypes>()

    useEffect(() => {
        getMonthlyStats(period.month, period.year)
        .then((data) => setData(data))
    }, [period])

    return (
        <div 
            className="w-96 h-64 pt-5 border border-gray-200 rounded-md shadow-md"
            data-cy="monthly-stats">
            <MonthlyStatsHeader 
                month={ data?.current_month } 
                period={ period }
                setPeriod={ setPeriod } />
            <MonthlyStatsBody data={ data } />
        </div>
    )
}