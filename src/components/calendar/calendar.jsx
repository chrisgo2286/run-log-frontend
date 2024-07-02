import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import Day from "./day";

export default function Calendar () {
    const dayNums = Array.from({length: 31}, (x, i) => i);
    const monthName = "July"
    
    return (
        <main className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
            <CalendarHeader monthName={ monthName } />
            <DaysOfTheWeek />
            <div className="grid grid-cols-7 border border-solid border-gray-200">
                { dayNums.map((dayNum) => <Day dayNum={ dayNum } /> )}
            </div>
            
        </main>
    )
}