import { CalendarDataTypes } from "../../misc/hooks/useGetNewCalendar"
import WeeklyTotals from "../calendar/calendar/weeklyTotals"
import CalendarDay from "./calendarDay"
import WeeklyTotal from "./weeklyTotal"

export default function CalendarBody ({ data }: { data: CalendarDataTypes}): JSX.Element {
    return (
        <div className="border border-gray-200">
            <WeeklyHeaders />
            <div className="grid grid-cols-8">
                <div className="col-span-7 grid grid-cols-7">
                    { data.calendarData.map((day, ndx) => (
                        <CalendarDay data={ day }/>
                    ))}
                </div>
                <div className="col-span-1">
                    { data.totals.map((total, ndx) => (
                        <WeeklyTotal total={ total } />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 
function WeeklyHeaders () {
    return (
        <div className="grid grid-cols-8">
            { daysOfTheWeek.map((day) => (
                <div className="border border-gray-200 text-center">{ day }</div>
            ))}
            <div className="border border-gray-200 text-center">KM</div>
        </div>
    )
}