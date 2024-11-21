import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { useGetPeriod } from "../../../misc/hooks/useGetPeriod";
import { useGetMonthlyStatsData } from "../../../misc/hooks/useGetMonthlyStatsData";

export type MonthlyStatsTypes = {
    current_month: string,
    distance: string,
    time: number,
    weekly_average: string,
    average_pace: number
}

export default function CurrentMonthStats (): JSX.Element {

    const { period, setPeriod } = useGetPeriod()    
    const { data } = useGetMonthlyStatsData(period)

    return (
        <div 
            className="w-96 h-64 pt-5 border border-gray-200 rounded-md shadow-md"
            data-cy="monthly-stats">
            <MonthlyStatsHeader 
                month={ (data) ? data.current_month: "1" } 
                period={ period }
                setPeriod={ setPeriod } />
            <MonthlyStatsBody data={ data } />
        </div>
    )
}