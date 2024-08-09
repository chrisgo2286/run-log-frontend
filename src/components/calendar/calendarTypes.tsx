export type DayProps = {
    data: DataTypes,
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: DataTypes,
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>
}

export type DataTypes = {
    id?: string,
    run_type?: string,
    date?: string,
    day?: string,
    distance?: string,
    time?: string,
    comment?: string
}

export type DataObjectType = {
    data: DataTypes
}

export type CalendarDaysProps = {
    data: DataTypes[], 
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: DataTypes,
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>
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
    fields: DataTypes,
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>,
    errors: string[],
    handleSubmitRun: () => void
}