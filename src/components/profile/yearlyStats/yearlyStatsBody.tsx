import { 
    formatTime, 
    formatWeeklyAverage, 
    formatPace,
    formatMonthlyAverage 
    } from "../../../misc/miscFunctions";
import { YearlyStatsBodyProp } from "./yearlyStatsTypes";

export default function YearlyStatsBody ({ data }: YearlyStatsBodyProp): JSX.Element {
    
    function handleTime (): string {
        return formatTime(data?.time)
    }

    function handleWeeklyAverage (): string {
        return formatWeeklyAverage(data?.weekly_average)
    }

    function handleMonthlyAverage (): string {
        return formatMonthlyAverage(data?.monthly_average)
    }

    function handlePace (): string {
        return formatPace(data?.average_pace)
    }

    return (
        <div>
            <div className="text-center text-2xl">{ data?.distance } km</div>
            <div className="text-center text-2xl">{ handleTime() }</div>
            <div className="text-center text-2xl">{ handleWeeklyAverage() }</div>
            <div className="text-center text-2xl">{ handleMonthlyAverage() }</div>
            <div className="text-center text-2xl">{ handlePace() }</div>
        </div>
    )
}