import { RunDataTypes } from "../calendarTypes"

export type RunModalButtonsProps = {
    id?: string, 
    handleSubmitRun: () => void, 
    handleDeleteClicked: () => void
}

export type ModalDualButtonProps = {
    handleSubmitRun: () => void,
    handleDeleteClicked: () => void
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
    deleteModalVisible: boolean,
    setDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    fields: RunDataTypes, 
    setFields: React.Dispatch<React.SetStateAction<RunDataTypes>>, 
    submitRun: () => void
}