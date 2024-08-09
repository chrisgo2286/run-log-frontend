import { DataTypes } from "../calendarTypes"

export type RunModalButtonsProps = {
    id?: string, 
    handleSubmitRun: () => void, 
    handleDeleteRun: () => Promise<void>
}

export type ModalDualButtonProps = {
    handleSubmitRun: () => void,
    handleDeleteRun: () => Promise<void>
}

export type HandleSubmitRunType = {
    handleSubmitRun: () => void
}

export type RunModalFieldsProps = {
    fields: DataTypes,
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>
}

export type RunModalProps = {
    modalVisible: boolean,
    fields: DataTypes, 
    setFields: React.Dispatch<React.SetStateAction<DataTypes>>, 
    submitRun: () => void
}