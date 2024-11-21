import MonthlyChartHeader from "./monthlyChartHeader";
import MonthlyChartBody from "./monthlyChartBody";
import { useGetPeriod } from "../../../misc/hooks/useGetPeriod";
import { useGetMonthlyChart } from "../../../misc/hooks/useGetMonthlyChart";

export type DataItem = {
    label: string,
    distance: string
}

export default function MonthlyChart () {
    
    const { period, setPeriod } = useGetPeriod()
    const { data } = useGetMonthlyChart(period)

    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <MonthlyChartHeader period={ period } setPeriod={ setPeriod } />
            <MonthlyChartBody data={ data } />
        </div>
    )
}