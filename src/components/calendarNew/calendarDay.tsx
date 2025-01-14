import { CalendarDayTypes } from "../../misc/hooks/useGetNewCalendar";

export default function CalendarDay ({ data }: { data: CalendarDayTypes }): JSX.Element {
    return (
        <div>
            { data.dayNum }
        </div>
    )
}