import { useState, useEffect } from "react"
import { getYearlyStats } from "../../../misc/apiCalls"
import { YearlyStatsTypes } from "../profileTypes"
import YearlyStatsBody from "./yearlyStatsBody"
import YearlyStatsHeader from "./yearlyStatsHeader"

export default function CurrentYearStats (): JSX.Element {
    const curDate = new Date()
    const [ year, setYear ] = useState(curDate.getFullYear())
    const [ data, setData ] = useState<YearlyStatsTypes>()

    useEffect(() => {
        getYearlyStats(year).then((data) => setData(data))
    }, [])

    return (
        <div className="w-96 h-64 pt-5 border border-gray-200 rounded-md shadow-md">
            <YearlyStatsHeader year={ year } setYear={ setYear } />
            <YearlyStatsBody data={ data } />
        </div>
    )
}