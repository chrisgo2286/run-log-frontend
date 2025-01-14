import { useState } from "react";

export type PeriodTypes = {
    month: number,
    year: number
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
