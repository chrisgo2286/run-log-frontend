export default function CurrentYearStats ({ data }) {
    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <div className="text-center font-">{ data?.current_year }</div>
            <div>Total Distance - { data?.total_distance }km</div>
            <div>Total Time - { data?.total_time }hours</div>
            <div>Weekly Average - { data?.weekly_average }</div>
            <div>Monthly Average - { data?.monthly_average }</div>
            <div>Average Pace - { data?.average_pace }min/km</div>
        </div>
    )
}