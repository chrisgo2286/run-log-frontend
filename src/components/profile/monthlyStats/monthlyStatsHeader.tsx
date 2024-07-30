import { getNextPeriod, getPreviousPeriod } from "../../../misc/miscFunctions"

export default function MonthlyStatsHeader ({ month, period, setPeriod }) {
    
    function handleClickPrevous () {
        const newPeriod = getPreviousPeriod(period)
        setPeriod(newPeriod)
    }

    function handleClickNext () {
        const newPeriod = getNextPeriod(period)
        setPeriod(newPeriod)
    }
    
    return (
        <div className="flex justify-between">
            <span 
                className="material-icons"
                onClick={ handleClickPrevous }>
                navigate_before
            </span>
            <span className="text-4xl font-medium mb-5">{ month }</span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}