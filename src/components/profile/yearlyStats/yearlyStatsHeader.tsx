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
                onClick={ handleClickPrevious }
                data-cy="yearly-stats-previous">
                navigate_before
            </span>
            <span 
                className="text-4xl font-medium mb-5"
                data-cy="yearly-stats-header">
                { year }
            </span>
            <span 
                className="material-icons"
                onClick={ handleClickNext }
                data-cy="yearly-stats-next">
                navigate_next
            </span>
        </div>
    )
}