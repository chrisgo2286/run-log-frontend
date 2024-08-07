export type WeeklyChartHeaderProps = {
    startDateObj: Date,
    setStartDateObj: React.Dispatch<React.SetStateAction<Date>>
}

export type WeeklyChartBodyProp = {
    data: DataItem[] | undefined
}

export type DataItem = {
    label: string,
    distance: string
}