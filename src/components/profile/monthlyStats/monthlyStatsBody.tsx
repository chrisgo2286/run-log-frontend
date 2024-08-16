import { 
    formatDistance,
    formatTime, 
    formatWeeklyAverage, 
    formatPace 
} from "../../../misc/miscFunctions";
import { MonthlyStatsProp } from "./monthlyStatsTypes";

export default function MonthlyStatsBody ({ data }: MonthlyStatsProp): JSX.Element {

    function handleDistance (): string {
        return formatDistance( (data) ? parseFloat(data.distance): 0)
    }

    function handleTime (): string {
        return formatTime( (data) ? data.time: 0 )
    }

    function handleWeeklyAverage (): string {
        return formatWeeklyAverage(( data) ? data.weekly_average: "" )
    }

    function handlePace (): string {
        return formatPace( (data) ? data.average_pace: 0 )
    }

    return (
        <div>
            <div 
                className="text-center text-2xl"
                data-cy="monthly-stats-distance">
                { handleDistance() }
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