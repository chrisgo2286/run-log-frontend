import { DataTypes } from "../calendarTypes"

export type RunModalButtonsProps = {
    id?: string, 
    submitRun: () => void, 
    handleDeleteRun: () => Promise<void>
}

export type ModalDualButtonProps = {
    submitRun: () => void,
    handleDeleteRun: () => Promise<void>
}

export type SubmitRunType = {
    submitRun: () => void
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