import { useState, useEffect } from "react";
import { PeriodTypes, DataTypes } from "../components/calendar/calendarTypes";
import { getCalendar } from "./apiCalls";

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

type UseGetPeriodReturnType = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

export function useGetPeriod (): UseGetPeriodReturnType {
    const curDate = new Date();
    const [ period, setPeriod ] = useState<PeriodTypes>({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    return { period, setPeriod }
}