import YearlyStatsBody from "./yearlyStatsBody"
import YearlyStatsHeader from "./yearlyStatsHeader"
import { UseGetYearlyStatsData } from "../../../misc/hooks/useGetYearlyStatsData"

export type YearlyStatsTypes = {
    current_year: string,
    distance: string,
    time: number,
    monthly_average: string,
    weekly_average: string,
    average_pace: number
}

export default function CurrentYearStats (): JSX.Element {
    
    const { data, year, setYear } = UseGetYearlyStatsData()

    return (
        <div className="w-96 h-64 pt-5 border border-gray-200 rounded-md shadow-md">
            <YearlyStatsHeader year={ year } setYear={ setYear } />
            <YearlyStatsBody data={ data } />
        </div>
    )
}