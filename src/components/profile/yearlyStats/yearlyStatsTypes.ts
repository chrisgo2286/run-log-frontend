export type YearlyStatsTypes = {
    current_year: string,
    distance: string,
    time: number,
    monthly_average: string,
    weekly_average: string,
    average_pace: number
}

export type YearlyStatsBodyProp = {
    data: YearlyStatsTypes | undefined
}

export type YearStatsHeaderProps = {
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}