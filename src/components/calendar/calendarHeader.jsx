import { getMonthNameFromNum, getNextPeriod, getPreviousPeriod } from "../../misc/miscFunctions";

export default function CalendarHeader ({ period, setPeriod }) {
    
    const monthName = getMonthNameFromNum(period.month)

    function goPreviousMonth () {
        const newPeriod = getPreviousPeriod(period)
        setPeriod(newPeriod);
    }

    function goNextMonth () {
        const newPeriod = getNextPeriod(period)
        setPeriod(newPeriod);
    }

    return (
        <section className="h-40 px-5 flex justify-between items-center bg-green-100 rounded-t-xl">
            <i className='hover:cursor-pointer' onClick={ goPreviousMonth }>Previous Month</i>
            <p className="text-4xl font-bold">{ monthName } {period.year}</p>
            <i className='hover:cursor-pointer' onClick={ goNextMonth }>Next Month</i>
        </section>
    )
}