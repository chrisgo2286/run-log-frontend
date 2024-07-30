export default function YearlyStatsHeader ({ year, setYear }): JSX.Element {
    
    function handleClickPrevious () {
        setYear(year - 1)
    }

    function handleClickNext () {
        setYear(year + 1)
    }
    
    return (
        <div className="flex justify-between">
            <span 
                className="material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-4xl font-medium mb-5">{ year }</span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}