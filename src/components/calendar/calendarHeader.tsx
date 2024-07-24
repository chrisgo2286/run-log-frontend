import { getMonthNameFromNum, getNextPeriod, getPreviousPeriod } from "../../misc/miscFunctions";
import { CalendarHeaderProps } from "./calendarTypes";

export default function CalendarHeader ({ period, setPeriod }: CalendarHeaderProps): JSX.Element {
    
    const monthName = getMonthNameFromNum(period.month)

    function goPreviousMonth (): void {
        const newPeriod = getPreviousPeriod(period)
        setPeriod(newPeriod);
    }

    function goNextMonth (): void {
        const newPeriod = getNextPeriod(period)
        setPeriod(newPeriod);
    }

    return (
        <section className="h-40 px-5 flex justify-between items-center bg-green-100 rounded-t-xl">
            <i 
                className='hover:cursor-pointer' 
                onClick={ goPreviousMonth }
                data-cy="calendar-header-previous-month">    
                Previous Month
            </i>
            <p 
                className="text-4xl font-bold"
                data-cy="calendar-header-period">
                { monthName } {period.year}
            </p>
            <i 
                className='hover:cursor-pointer' 
                onClick={ goNextMonth }
                data-cy="calendar-header-next-month">
                Next Month
            </i>
        </section>
    )
}