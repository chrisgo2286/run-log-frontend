export type ProfileDataTypes = {
    monthly_stats: MonthlyStatsTypes,
    yearly_stats: YearlyStatsTypes,
    monthly_chart: {},
    weekly_chart: {},
    pace_chart: {}
}

export type MonthlyStatsTypes = {
    current_month: string,
    total_distance: string,
    total_time: string,
    weekly_average: string,
    average_pace: string
}

export type YearlyStatsTypes = {
    current_year: string,
    total_distance: string,
    total_time: string,
    monthly_average: string,
    weekly_average: string,
    average_pace: string
}

export type MonthlyStatsProps = {
    data: MonthlyStatsTypes
}

export type YearlyStatsProps = {
    data: YearlyStatsTypes
}