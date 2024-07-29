import { formatTime, formatWeeklyAverage, formatPace } from "../../../misc/miscFunctions";

export default function MonthlyStatsBody ({ data }): JSX.Element {

    function handleTime () {
        return formatTime(data?.time)
    }

    function handleWeeklyAverage () {
        return formatWeeklyAverage(data?.weekly_average)
    }

    function handlePace () {
        return formatPace(data?.average_pace)
    }

    return (
        <div>
            <div className="text-center text-2xl">{ data?.distance } km</div>
            <div className="text-center text-2xl">{ handleTime() }</div>
            <div className="text-center text-2xl">{ handleWeeklyAverage() }</div>
            <div className="text-center text-2xl">{ handlePace() }</div>
        </div>
    )
}