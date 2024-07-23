import { MonthlyStatsProps, MonthlyStatsTypes } from "./profileTypes";

export default function CurrentMonthStats ({ data }: MonthlyStatsProps): JSX.Element {
    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <div className="text-center font-">{ data?.current_month }</div>
            <div>Total Distance - { data?.total_distance }km</div>
            <div>Total Time - { data?.total_time }hours</div>
            <div>Weekly Average - { data?.weekly_average }</div>
            <div>Average Pace - { data?.average_pace }min/km</div>
        </div>
    )
}