import { useState, useEffect } from "react"
import { MonthlyStatsTypes } from "../../components/profile/monthlyStats/monthlyStats"
import { PeriodTypes } from "../../components/calendar/calendarTypes"
import { getMonthlyStats } from "../apiCalls"

type UseGetMonthlyStatsDataReturnType = {
    data: MonthlyStatsTypes
}

const defaultMonthlyStats = {
    current_month: "",
    distance: "",
    time: 0,
    weekly_average: "",
    average_pace: 0
}

export function useGetMonthlyStatsData (
    period: PeriodTypes
): UseGetMonthlyStatsDataReturnType {

    const [ data, setData ] = useState<MonthlyStatsTypes>(defaultMonthlyStats)

    useEffect(() => {
        getMonthlyStats(period.month, period.year)
        .then((data) => setData(data))
    }, [period])

    return { data }
}