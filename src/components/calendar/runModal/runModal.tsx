import RunModalFields from "./runModalFields";
import RunModalButtons from "./runModalButtons";
import { RunModalProps } from "../calendarTypes";
import { deleteRun } from "../../../misc/apiCalls";
import { refreshPage } from "../../../misc/miscFunctions";
import { Validation } from "../../validation/validation";
import DeleteModal from "./deleteModal";
import { useState } from "react";

export default function RunModal ({ 
    modalVisible,
    deleteModalVisible,
    setDeleteModalVisible,
    fields, 
    setFields,
    errors, 
    handleSubmitRun 
}: RunModalProps): JSX.Element {
    const visibleClass = "absolute flex flex-col top-1/3 left-1/3 w-1/3 border border-solid border-gray-200 bg-white rounded-md shadow-md" 

    async function handleDeleteRun (): Promise<void> {
        setDeleteModalVisible(false)
        if (fields.id) {
            const response = await deleteRun(fields.id)
            if (response.status === 204) {
                refreshPage()
            } else {
                console.log("Run not deleted successfully!")
                //NEED TO SET ERRORS HERE!
            }
        }
    }

    return (
        <div className={ (modalVisible) ? "" : "hidden" }>
            <div className={ (deleteModalVisible) ? "hidden" : visibleClass }>
                <RunModalHeader />            
                <RunModalFields
                    fields={ fields }
                    setFields={ setFields } />
                <RunModalButtons 
                    id={ fields.id } 
                    handleSubmitRun={ handleSubmitRun }
                    handleDeleteClicked={ () => setDeleteModalVisible(true) } />
                <Validation errors={ errors } className={ "h-14 mx-auto" }/>
            </div>
            <DeleteModal 
                deleteModalVisible={ deleteModalVisible }
                setDeleteModalVisible={ setDeleteModalVisible }
                handleDeleteRun={ handleDeleteRun }/>           
        </div>
    )
}

const RunModalHeader = () => (
    <div className="h-16 text-xl font-bold border-b border-b-gray-200 bg-blue-100 flex flex-col items-center justify-center">
        <span>Add Run</span>
    </div>
)