import { useState, useEffect } from "react"
import { PeriodTypes } from "./useGetPeriod"
import { RunTypes } from "./trainingBlockHooks"

export type CalendarDayTypes = RunTypes & {
    dayNum: string
}

export type CalendarDataTypes = {
    totals: string[],
    calendarData: CalendarDayTypes[]
}

export function useGetCalendar (period: PeriodTypes): { data: CalendarDataTypes }{
    
    const [ data, setData ] = useState<CalendarDataTypes>({
        totals: [],
        calendarData: []
    })

    useEffect(() => {
        setData(dummyData)
    })
    return { data }
}

const dummyData = {
    "totals": ["0", "0"],
    "calendarData": [
        { "dayNum": "1", "date": "2025-01-01" },
        { "dayNum": "2", "date": "2025-01-02" },
        { "dayNum": "3", "date": "2025-01-03" },
        { "dayNum": "4", "date": "2025-01-04" },
        { "dayNum": "5", "date": "2025-01-05" },
        { "dayNum": "6", "date": "2025-01-06" },
        { "dayNum": "7", "date": "2025-01-07" },
        { "dayNum": "8", "date": "2025-01-08" },
        { "dayNum": "9", "date": "2025-01-09" },
        { "dayNum": "10", "date": "2025-01-10" },
        { "dayNum": "11", "date": "2025-01-11" },
        { "dayNum": "12", "date": "2025-01-12" },
        { "dayNum": "13", "date": "2025-01-13" },
        { "dayNum": "14", "date": "2025-01-14" },
    ]
}