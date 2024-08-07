export type MonthlyStatsTypes = {
    current_month: string,
    distance: string,
    time: number,
    weekly_average: string,
    average_pace: number
}

export type MonthlyStatsProp = {
    data: MonthlyStatsTypes | undefined
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
