import { getNextPeriod, getPreviousPeriod } from "../../../misc/miscFunctions"
import { MonthlyStatsHeaderProps } from "./monthlyStatsTypes"

export default function MonthlyStatsHeader ({ 
    month, 
    period, 
    setPeriod 
    }: MonthlyStatsHeaderProps): JSX.Element {
    
    function handleClickPrevous (): void {
        const newPeriod = getPreviousPeriod(period)
        setPeriod(newPeriod)
    }

    function handleClickNext (): void {
        const newPeriod = getNextPeriod(period)
        setPeriod(newPeriod)
    }
    
    return (
        <div className="flex justify-between">
            <span 
                className="material-icons"
                onClick={ handleClickPrevous }
                data-cy="monthly-stats-previous">
                navigate_before
            </span>
            <span 
                className="text-4xl font-medium mb-5"
                data-cy="monthly-stats-header">
                { month }
            </span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }
                data-cy="monthly-stats-next">
                navigate_next
            </span>
        </div>
    )
}