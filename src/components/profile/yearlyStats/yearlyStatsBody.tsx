import { 
    formatTime, 
    formatWeeklyAverage, 
    formatPace,
    formatMonthlyAverage 
    } from "../../../misc/miscFunctions";

export default function YearlyStatsBody ({ data }) {
    
    function handleTime () {
        return formatTime(data?.time)
    }

    function handleWeeklyAverage () {
        return formatWeeklyAverage(data?.weekly_average)
    }

    function handleMonthlyAverage () {
        return formatMonthlyAverage(data?.monthly_average)
    }

    function handlePace () {
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