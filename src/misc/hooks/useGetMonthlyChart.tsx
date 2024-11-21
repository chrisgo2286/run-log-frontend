import { useState, useEffect } from "react"
import { DataItem } from "../../components/profile/monthlyChart/monthlyChart"
import { getMonthlyChartData } from "../apiCalls"
import { PeriodTypes } from "../../components/calendar/calendarTypes"

type UseGetMonthlyChartReturnType = {
    data: DataItem[]
}

export function useGetMonthlyChart (
    period: PeriodTypes
): UseGetMonthlyChartReturnType {

    const [ data, setData ] = useState<DataItem[]>([])
    
    useEffect(() => {
        getMonthlyChartData(period.month, period.year)
        .then((data) => setData(data))
    }, [period])

    return { data }
} 