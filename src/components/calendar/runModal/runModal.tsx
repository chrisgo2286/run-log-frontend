import RunModalFields from "./runModalFields";
import RunModalButtons from "./runModalButtons";
import { RunModalProps } from "../calendarTypes";
import { deleteRun } from "../../../misc/apiCalls";
import { refreshPage } from "../../../misc/miscFunctions";

export default function RunModal ({ modalVisible, fields, setFields, submitRun }: RunModalProps): JSX.Element {
    const visibleClass = "absolute flex flex-col top-1/3 left-1/3 w-1/3 border border-solid border-gray-200 bg-white rounded-md shadow-md" 

    async function handleDeleteRun () {
        if (fields.id) {
            const result = await deleteRun(fields.id)
            refreshPage()
        }
    }

    return (
        <div className={ (modalVisible) ? visibleClass : "hidden" }>
            <RunModalHeader />            
            <RunModalFields
                fields={ fields }
                setFields={ setFields } />
            <RunModalButtons 
                id={ fields.id } 
                submitRun={ submitRun }
                handleDeleteRun={ handleDeleteRun } />           
        </div>
    )
}

const RunModalHeader = () => (
    <div className="h-16 text-xl font-bold border-b border-b-gray-200 bg-blue-100 flex flex-col items-center justify-center">
        <span>Add Run</span>
    </div>
)