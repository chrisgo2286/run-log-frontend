import { formatDateToString, incrementDate } from "../../../misc/miscFunctions";
import { WeeklyChartHeaderProps } from "./weeklyChartTypes";

export default function WeeklyChartHeader ({ 
    startDateObj, 
    setStartDateObj 
    }: WeeklyChartHeaderProps): JSX.Element {
    
    function handleClickPrevious (): void {
        const newDateObj = incrementDate(startDateObj, -7)
        setStartDateObj(newDateObj)
    }

    function handleClickNext (): void {
        const newDateObj = incrementDate(startDateObj, 7)
        setStartDateObj(newDateObj)
    }
    
    return (
        <div className="flex justify-between">
            <span 
                className="material-icons hover:cursor-pointer"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-2xl font-medium mb-5" >
                Week of { formatDateToString(startDateObj) }
            </span>
            <span 
                className="material-icons hover:cursor-pointer"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}