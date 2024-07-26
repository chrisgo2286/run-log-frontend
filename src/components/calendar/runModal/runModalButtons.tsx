import React from 'react'

export default function RunModalButtons ({ id, submitRun, handleDeleteRun }) {
    return (
        <React.Fragment>
            { 
                (id) ? 
                <ModalDualButton submitRun={ submitRun} handleDeleteRun={ handleDeleteRun } /> : 
                <ModalSingleButton submitRun={ submitRun } />
            }
        </React.Fragment>
    )
}

const ModalSingleButton = ({ submitRun }) => (
    <button 
        className="button w-20 h-8 mb-10 mx-auto border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
        onClick={ submitRun }
        data-cy="modal-submit-btn">
        Submit
    </button>
)

const ModalDualButton = ({ submitRun, handleDeleteRun }) => (
    <div className='mx-auto'>
        <button 
            className="button w-20 h-8 mb-10 mr-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
            onClick={ submitRun }
            data-cy="modal-submit-btn">
            Submit
        </button>
        <button
            className="button w-20 h-8 mb-10 ml-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
            onClick={ handleDeleteRun }
            data-cy="modal-delete-btn">
            Delete
        </button>
    </div>
)