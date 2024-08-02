import { 
    getPreviousPeriod, 
    getNextPeriod, 
    getMonthNameFromNum 
    } from "../../../misc/miscFunctions"
import { MonthlyChartHeaderProps } from "./monthlyChartTypes"

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
    
    function handleMonthName (): string {
        return getMonthNameFromNum(period.month)
    }

    return (
        <div className="flex justify-between">
            <span 
                className="material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-4xl font-medium mb-5">{ handleMonthName() }</span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}