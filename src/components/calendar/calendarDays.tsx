import Day from "./day";
import { CalendarDaysProps } from "./calendarTypes";

export default function CalendarDays ({ 
    data, 
    modalVisible, 
    setModalVisible, 
    fields, 
    setFields 
}: CalendarDaysProps) {
    return (
        <div className="grid grid-cols-7 border border-solid border-gray-200">
            { data.map((dataItem, ndx) => (
                <Day 
                    key={ dataItem.day + ndx } 
                    data={ dataItem }
                    modalVisible={ modalVisible }
                    setModalVisible={ setModalVisible }
                    fields={ fields }
                    setFields={ setFields } /> 
            ))}
        </div>
    )
}