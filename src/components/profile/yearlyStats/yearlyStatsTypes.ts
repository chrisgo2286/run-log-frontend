export type YearlyStatsTypes = {
    current_year: string,
    distance: string,
    time: string,
    monthly_average: string,
    weekly_average: string,
    average_pace: string
}

export type YearlyStatsBodyProp = {
    data: YearlyStatsTypes
}

export type YearStatsHeaderProps = {
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}