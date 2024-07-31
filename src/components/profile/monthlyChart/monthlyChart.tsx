import { useState, useEffect } from "react";
import { getMonthlyChartData } from "../../../misc/apiCalls";
import { MonthlyChartDataTypes, PeriodTypes } from "./monthlyChartTypes";
import MonthlyChartHeader from "./monthlyChartHeader";
import MonthlyChartBody from "./monthlyChartBody";

export default function MonthlyChart () {
    
    const curDate = new Date()
    const [ period, setPeriod ] = useState<PeriodTypes>({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState<MonthlyChartDataTypes>()
    
    useEffect(() => {
        getMonthlyChartData(period.month, period.year)
        .then((data) => setData(data))
    }, [period])
    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <MonthlyChartHeader period={ period } setPeriod={ setPeriod } />
            <MonthlyChartBody data={ data } />
        </div>
    )
}