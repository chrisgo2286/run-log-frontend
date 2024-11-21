import { useState, useEffect } from "react"
import { DataTypes, PeriodTypes } from "../../components/calendar/calendarTypes"
import { getCalendar } from "../apiCalls"

type UseGetCalendarReturnType = {
    data: DataTypes, 
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export function useGetCalendar (period: PeriodTypes): UseGetCalendarReturnType {
    
    const [ data, setData ] = useState<DataTypes>({
        runData: [],
        weeklyTotals: []
    })
    const [ updateRequired, setUpdateRequired ] = useState<boolean>(false)

    useEffect(() => {
        getCalendar(period.month, period.year).then(data => setData(data))
        setUpdateRequired(false);
    }, [period, updateRequired])    

    return { data, setUpdateRequired }
}