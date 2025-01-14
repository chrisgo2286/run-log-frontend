import CalendarHeader from "./calendarHeader"
import CalendarBody from "./calendarBody"
import { useGetPeriod } from '../../misc/hooks/useGetPeriod';
import { useGetCalendar } from "../../misc/hooks/useGetNewCalendar";

export default function CalendarPage () {

    const { period, setPeriod } = useGetPeriod()
    const { data } = useGetCalendar(period)
    return (
        <main className="">
            <div className="mt-16">
                <CalendarHeader period={ period } setPeriod={ setPeriod }/>
                <CalendarBody data={ data } />
            </div>
        </main>
    )
}