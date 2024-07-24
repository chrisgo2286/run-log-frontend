export type DayProps = {
    data: DataTypes,
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setFields: React.Dispatch<React.SetStateAction<FieldsTypes | DataTypes>>
}

export type FieldsTypes = {
    id: string | number,
    date: string,
    run_type: string,
    distance: string | number,
    time: string | number,
    comment: string
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
    setFields: React.Dispatch<React.SetStateAction<FieldsTypes | DataTypes>>
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
    fields: FieldsTypes,
    setFields: React.Dispatch<React.SetStateAction<FieldsTypes | DataTypes>>,
    submitRun: () => void
}