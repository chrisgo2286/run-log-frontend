import { RunDataTypes } from "../calendarTypes"

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
    fields: RunDataTypes,
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>
}

export type RunModalProps = {
    modalVisible: boolean,
    fields: RunDataTypes, 
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>, 
    submitRun: () => void
}