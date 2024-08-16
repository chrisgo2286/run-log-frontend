import { YearStatsHeaderProps } from "./yearlyStatsTypes";
import "../profile.css";

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
                className="arrow material-icons"
                onClick={ handleClickPrevious }
                data-cy="yearly-stats-previous">
                navigate_before
            </span>
            <span 
                className="text-2xl font-medium mb-5"
                data-cy="yearly-stats-header">
                { year } Stats YTD
            </span>
            <span 
                className="arrow material-icons"
                onClick={ handleClickNext }
                data-cy="yearly-stats-next">
                navigate_next
            </span>
        </div>
    )
}