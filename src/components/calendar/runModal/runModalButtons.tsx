import React from 'react'
import { 
    ModalDualButtonProps, 
    RunModalButtonsProps, 
    HandleSubmitRunType 
} from './runModalTypes'

export default function RunModalButtons ({ 
    id, 
    handleSubmitRun, 
    handleDeleteClicked 
}: RunModalButtonsProps): JSX.Element {

    return (
        <React.Fragment>
            { 
                (id) ? 
                <ModalDualButton handleSubmitRun={ handleSubmitRun } handleDeleteClicked={ handleDeleteClicked } /> : 
                <ModalSingleButton handleSubmitRun={ handleSubmitRun } />
            }
        </React.Fragment>
    )
}

const ModalSingleButton = ({ handleSubmitRun }: HandleSubmitRunType): JSX.Element => (
    <button 
        className="button w-20 h-8 mx-auto border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
        onClick={ handleSubmitRun }
        data-cy="modal-submit-btn">
        Submit
    </button>
)

const ModalDualButton = ({ 
    handleSubmitRun, 
    handleDeleteClicked 
}: ModalDualButtonProps): JSX.Element => (
    <div className='mx-auto'>
        <button 
            className="button w-20 h-8 mr-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
            onClick={ handleSubmitRun }
            data-cy="modal-submit-btn">
            Submit
        </button>
        <button
            className="button w-20 h-8 ml-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
            onClick={ handleDeleteClicked }
            data-cy="modal-delete-btn">
            Delete
        </button>
    </div>
)