import { incrementDate } from "../../../misc/miscFunctions";
import { WeeklyChartHeaderProps } from "./weeklyChartTypes";
import "../profile.css";

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
        <div className="flex justify-between mt-4">
            <span 
                className="arrow material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-2xl font-medium mb-5" >
                Weekly Distance
            </span>
            <span 
                className="arrow material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}