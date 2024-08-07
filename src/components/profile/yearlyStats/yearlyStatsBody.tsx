import { 
    formatTime, 
    formatWeeklyAverage, 
    formatPace,
    formatMonthlyAverage 
    } from "../../../misc/miscFunctions";
import { YearlyStatsBodyProp } from "./yearlyStatsTypes";

export default function YearlyStatsBody ({ data }: YearlyStatsBodyProp): JSX.Element {
    
    function handleTime (): string {
        return formatTime((data) ? data.time: 0)
    }

    function handleWeeklyAverage (): string {
        return formatWeeklyAverage((data) ? data.weekly_average: "")
    }

    function handleMonthlyAverage (): string {
        return formatMonthlyAverage((data) ? data.monthly_average: "")
    }

    function handlePace (): string {
        return formatPace((data) ? data.average_pace: 0)
    }

    return (
        <div>
            <div 
                className="text-center text-2xl"
                data-cy="yearly-stats-distance">
                { data?.distance } km
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="yearly-stats-time">
                { handleTime() }
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="yearly-stats-weekly-average">
                { handleWeeklyAverage() }
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="yearly-stats-monthly-average">
                { handleMonthlyAverage() }
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="yearly-stats-pace">
                { handlePace() }
            </div>
        </div>
    )
}