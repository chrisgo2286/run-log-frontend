export type MonthlyStatsTypes = {
    current_month: string,
    distance: string,
    time: string,
    weekly_average: string,
    average_pace: string
}

export type MonthlyStatsProp = {
    data: MonthlyStatsTypes
}

export type MonthlyStatsPeriod = {
    month: number,
    year: number
}

export type MonthlyStatsHeaderProps = {
    month: string,
    period: MonthlyStatsPeriod,
    setPeriod: React.Dispatch<React.SetStateAction<MonthlyStatsPeriod>>
}
