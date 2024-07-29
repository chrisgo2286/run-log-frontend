import { getNextPeriod, getPreviousPeriod } from "../../../misc/miscFunctions"

export default function MonthlyStatsHeader ({ month, setPeriod }) {
    return (
        <div className="flex justify-between">
            <span className="material-icons">navigate_before</span>
            <span className="text-4xl font-medium mb-5">{ month }</span>
            <span className="material-icons">navigate_next</span>
        </div>
    )
}