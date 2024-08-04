export type PeriodTypes = {
    month: number,
    year: number
}

export type DataItem = {
    name: string,
    distance: number
}

export type RunTypeChartBodyProp = {
    data: DataItem[]
}

export type RunTypeChartHeaderProps = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

