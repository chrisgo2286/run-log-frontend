export default function YearlyStatsHeader ({ year, setYear }): JSX.Element {
    return (
        <div className="flex justify-between">
            <span className="material-icons">navigate_before</span>
            <span className="text-4xl font-medium mb-5">{ year }</span>
            <span className="material-icons">navigate_next</span>
        </div>
    )
}