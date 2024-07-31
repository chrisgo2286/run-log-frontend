export type PeriodTypes = {
    month: number,
    year: number
}

export type MonthlyChartHeaderProps = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

export type MonthlyChartBodyProp = {
    data: MonthlyChartDataTypes
}

export type MonthlyChartDataTypes = {
    label: string[],
    distance: string[]
}