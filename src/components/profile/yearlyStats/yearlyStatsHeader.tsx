import { YearStatsHeaderProps } from "./yearlyStatsTypes"

export default function YearlyStatsHeader ({ 
    year, 
    setYear 
    }: YearStatsHeaderProps): JSX.Element {
    
    function handleClickPrevious (): void {
        setYear(year - 1)
    }

    function handleClickNext (): void {
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