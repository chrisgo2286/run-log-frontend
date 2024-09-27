import DaysOfTheWeek from "./daysOfTheWeek"
import CalendarDays from "./calendarDays"
import { DataTypes, RunDataTypes } from "./calendarTypes"
import WeeklyTotals from "./weeklyTotals"

type CalendarBodyProps = {
    data: DataTypes,
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: RunDataTypes,
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>
}
export default function CalendarBody ({
    data,
    modalVisible,
    setModalVisible,
    fields,
    setFields
}: CalendarBodyProps): JSX.Element {

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-11/12">
                <DaysOfTheWeek />
                <CalendarDays 
                    data={ data.runData }
                    modalVisible={ modalVisible }
                    setModalVisible={ setModalVisible }
                    fields={ fields }
                    setFields={ setFields } />
            </div>
            <WeeklyTotals data={ data.weeklyTotals }/>
        </div>
        
    )
}