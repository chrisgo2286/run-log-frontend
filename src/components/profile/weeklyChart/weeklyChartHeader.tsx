import { formatDateToString, incrementDate } from "../../../misc/miscFunctions";

export default function WeeklyChartHeader ({ startDateObj, setStartDateObj }) {
    
    function handleClickPrevious () {
        const newDateObj = incrementDate(startDateObj, -7)
        setStartDateObj(newDateObj)
    }

    function handleClickNext () {
        const newDateObj = incrementDate(startDateObj, 7)
        setStartDateObj(newDateObj)
    }
    
    return (
        <div className="flex justify-between">
            <span 
                className="material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-2xl font-medium mb-5" >
                Week of { formatDateToString(startDateObj) }
            </span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}