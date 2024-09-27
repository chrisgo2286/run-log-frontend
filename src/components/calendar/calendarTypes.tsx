export type DayProps = {
    data: RunDataTypes,
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: RunDataTypes,
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>
}

export type DataTypes = {
    runData: RunDataTypes[],
    weeklyTotals: string[]
}

export type RunDataTypes = {
    id?: string,
    run_type?: string,
    date?: string,
    day?: string,
    distance?: string,
    hours?: string,
    minutes?: string,
    seconds?: string,
    comment?: string
}

export type RunDataObjectType = {
    data: RunDataTypes
}

export type CalendarDaysProps = {
    data: RunDataTypes[], 
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: RunDataTypes,
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>
}

export type PeriodTypes = {
    month: number,
    year: number
}

export type CalendarHeaderProps = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

export type RunModalProps = {
    modalVisible: boolean,
    fields: RunDataTypes,
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>,
    errors: string[],
    handleSubmitRun: () => void
}