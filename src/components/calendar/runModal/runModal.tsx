import { useContext } from "react";
import RunModalFields from "./runModalFields";
import RunModalButtons from "./runModalButtons";
import { deleteRun } from "../../../misc/apiCalls";
import { refreshPage } from "../../../misc/miscFunctions";
import { Validation } from "../../validation/validation";
import DeleteModal from "./deleteModal";
import { CurrentWindowContext, RunErrorsContext, RunFieldsContext } from "../../../misc/context";

export type RunModalProps = {
    handleSubmitRun: () => void
}

export default function RunModal ({ 
    handleSubmitRun 
}: RunModalProps): JSX.Element {
    
    const { runFields } = useContext(RunFieldsContext)
    const { currentWindow, setCurrentWindow } = useContext(CurrentWindowContext)
    const { runErrors, setRunErrors } = useContext(RunErrorsContext)

    async function handleDeleteRun (): Promise<void> {
        setCurrentWindow("calendar")
        if (runFields.id) {
            const response = await deleteRun(runFields.id)
            if (response.status === 204) {
                refreshPage()
            } else {
                setRunErrors(["There was an error deleting this run!"])
            }
        }
    }

    return (
        <div className={ (currentWindow !== "calendar") ? "" : "hidden" }>
            <div className={ (currentWindow === "deleteRunModal") ? "hidden" : visibleClass }>
                <RunModalHeader />            
                <RunModalFields />
                <RunModalButtons 
                    id={ runFields.id } 
                    handleSubmitRun={ handleSubmitRun }
                    handleDeleteClicked={ () => setCurrentWindow("deleteRunModal") } />
                <Validation errors={ runErrors } className={ "h-14 mx-auto" }/>
            </div>
            <DeleteModal handleDeleteRun={ handleDeleteRun }/>           
        </div>
    )
}

const RunModalHeader = () => (
    <div className="h-16 text-xl font-bold border-b border-b-gray-200 bg-blue-100 flex flex-col items-center justify-center">
        <span>Add Run</span>
    </div>
)

const visibleClass = "absolute flex flex-col top-1/3 left-1/3 w-1/3 border border-solid border-gray-200 bg-white rounded-md shadow-md" 
