import { getMonthNameFromNum, getNextPeriod, getPreviousPeriod } from "../../misc/miscFunctions"
import { PeriodTypes } from "../../misc/hooks/useGetPeriod";
import { NextArrow, PrevArrow } from "../misc/arrow/arrow";

type CalendarHeaderProps = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}
export default function CalendarHeader ({ 
    period, 
    setPeriod 
}: CalendarHeaderProps): JSX.Element {
    
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
        <section className="h-40 px-5 flex justify-between items-center border border-gray-200">
            <PrevArrow
                className=""
                handleClick={ goPreviousMonth } />
            <p 
                className="text-2xl"
                data-cy="calendar-header-period">
                { monthName } {period.year}
            </p>
            <NextArrow
                className=""
                handleClick={ goNextMonth } />
        </section>
    )
}