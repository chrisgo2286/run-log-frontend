import { useState, useEffect } from "react"
import { YearlyStatsTypes } from "../../components/profile/yearlyStats/yearlyStats"
import { getYearlyStats } from "../apiCalls"

type UseGetYearlyStatsDataReturnType = {
    data: YearlyStatsTypes,
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const defaultYearlyStats = {
    current_year: "",
    distance: "",
    time: 0,
    monthly_average: "",
    weekly_average: "",
    average_pace: 0
}

export function UseGetYearlyStatsData (): UseGetYearlyStatsDataReturnType {
    const curDate = new Date()
    const [ year, setYear ] = useState<number>(curDate.getFullYear())
    const [ data, setData ] = useState<YearlyStatsTypes>(defaultYearlyStats)

    useEffect(() => {
        getYearlyStats(year).then((data) => setData(data))
    }, [year])

    return { data, year, setYear }
}