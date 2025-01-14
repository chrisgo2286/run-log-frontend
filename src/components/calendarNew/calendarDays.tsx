import { CalendarDayTypes } from "../../misc/hooks/useGetNewCalendar";
import CalendarDay from "./calendarDay";

export default function CalendarDays ({ data }: {data: CalendarDayTypes[]}): JSX.Element {
    return (
        <div className="col-span-7">
            { data.map((day, ndx) => (
                <CalendarDay data={ day }/>
            ))}
        </div>
    )
}