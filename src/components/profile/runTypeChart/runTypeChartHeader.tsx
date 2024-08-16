import { 
    getPreviousPeriod, 
    getNextPeriod, 
    getMonthNameFromNum 
} from "../../../misc/miscFunctions"
import { RunTypeChartHeaderProps } from "./runTypeChartTypes"
import "../profile.css";

export default function RunTypeChartHeader ({ 
    period, 
    setPeriod 
}: RunTypeChartHeaderProps): JSX.Element {
    
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
                className="arrow material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-2xl font-medium mb-5">{ handleMonthName() }</span>
            <span 
                className="arrow material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}
