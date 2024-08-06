import { formatTime, formatWeeklyAverage, formatPace } from "../../../misc/miscFunctions";
import { MonthlyStatsProp } from "./monthlyStatsTypes";

export default function MonthlyStatsBody ({ data }: MonthlyStatsProp): JSX.Element {

    function handleTime (): string {
        return formatTime(data?.time)
    }

    function handleWeeklyAverage (): string {
        return formatWeeklyAverage(data?.weekly_average)
    }

    function handlePace (): string {
        return formatPace(data?.average_pace)
    }

    return (
        <div>
            <div 
                className="text-center text-2xl"
                data-cy="monthly-stats-distance">
                { data?.distance } km
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="monthly-stats-time">
                { handleTime() }
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="monthly-stats-weekly-average">
                { handleWeeklyAverage() }
            </div>
            <div 
                className="text-center text-2xl"
                data-cy="monthly-stats-pace">
                { handlePace() }
            </div>
        </div>
    )
}