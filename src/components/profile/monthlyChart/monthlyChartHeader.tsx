import "../profile.css";
import { getPreviousPeriod, getNextPeriod } from "../../../misc/miscFunctions"
import { PeriodTypes } from "../../calendar/calendarTypes";

type MonthlyChartHeaderProps = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

export default function MonthlyChartHeader ({ 
    period, 
    setPeriod 
    }: MonthlyChartHeaderProps): JSX.Element {
    
    function handleClickPrevious (): void {
        const newPeriod = getPreviousPeriod(period)
        setPeriod(newPeriod)
    }

    function handleClickNext (): void {
        const newPeriod = getNextPeriod(period)
        setPeriod(newPeriod)
    }

    return (
        <div className="flex justify-between mt-4">
            <span 
                className="arrow material-icons"
                onClick={ handleClickPrevious }
                data-cy="monthly-chart-previous">
                navigate_before
            </span>
            <span 
                className="text-2xl font-medium mb-5"
                data-cy="monthly-chart-header">
                Monthly Distance
            </span>
            <span 
                className="arrow material-icons"
                onClick={ handleClickNext }
                data-cy="monthly-chart-next">
                navigate_next
            </span>
        </div>
    )
}