import DaysOfTheWeek from "./daysOfTheWeek"
import CalendarDays from "./calendarDays"
import WeeklyTotals from "./weeklyTotals"

export default function CalendarBody (): JSX.Element {

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-11/12">
                <DaysOfTheWeek />
                <CalendarDays />
            </div>
            <WeeklyTotals />
        </div>
        
    )
}