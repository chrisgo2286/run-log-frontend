import CalendarHeader from "./calendarHeader";
import DaysOfTheWeek from "./daysOfTheWeek";
import Day from "./day";
import { getArrayOfDayNums, getMonthNameFromNum } from "../../misc/miscFunctions";

export default function Calendar () {
    const curDate = new Date();
    const monthName = getMonthNameFromNum(curDate.getMonth());
    const dayNums = getArrayOfDayNums(curDate);

    return (
        <main className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
            <CalendarHeader monthName={ monthName } />
            <DaysOfTheWeek />
            <div className="grid grid-cols-7 border border-solid border-gray-200">
                { dayNums.map((dayNum) => <Day key={ dayNum } dayNum={ dayNum } /> )}
            </div>
            
        </main>
    )
}