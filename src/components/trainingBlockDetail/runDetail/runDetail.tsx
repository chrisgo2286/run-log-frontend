import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../../misc/button/button"
import { RunTypes } from "../../../misc/hooks/trainingBlockHooks"
import RunDetailFields from "./runDetailFields"
import { patchRun, postRun } from "../../../misc/apiCalls"
import { validateRun } from "./runValidation"
import { Validation } from "../../validation/validation"

export default function RunDetail (): JSX.Element {
    const navigate = useNavigate()
    const { data, trainingBlockId } = useLocation().state
    const [ fields, setFields ] = useState<RunTypes>({
        id: (data.id) ? data.id : "",
        date: (data.date) ? data.date: "",
        run_type: (data.run_type) ? data.run_type : "Easy Run",
        distance: (data.distance) ? data.distance : "",
        hours: (data.hours) ? data.hours : 0,
        minutes: (data.minutes) ? data.minutes : 0,
        seconds: (data.seconds) ? data.seconds : 0,
        comments: (data.comments) ? data.comments: "",
    })
    const [ errors, setErrors ] = useState<string[]>([])

    function handleSubmit (): void {
        const result = validateRun(fields)
        if (result === "Valid") {
            (fields.id) ? updateRun() : createRun();
        } else if (typeof result !== "string") {
            setErrors(result)
        }
    }

    async function updateRun (): Promise<void> {
        const result = await patchRun(fields)
        if (result.status === 200) {
            navigate(`/trainingBlockDetail/${trainingBlockId}`)  
        } else {
            setErrors(["There was an error updating this run!"])
        }
    }

    async function createRun (): Promise<void> {
        const result = await postRun(fields)
        if (result.status === 201) {
            navigate(`/trainingBlockDetail/${trainingBlockId}`)    
        } else {
            setErrors(["There was an error creating this run!"])
        }
    }

    function handleBack () {
        navigate(`/trainingBlockDetail/${trainingBlockId}`)
    }

    return (
        <main className="">
            <div className="border border-gray-200 w-120 flex flex-col justify-center items-center mx-auto mt-5 rounded-md p-5">
                <div className="" data-cy="header">Add Run</div>
                <Validation
                    className=""
                    errors={ errors } />

                <RunDetailFields fields={ fields } setFields={ setFields } />
                <div className="flex mt-5">
                    <Button 
                        className="bg-green-200 mr-5" 
                        onClick={ handleBack } 
                        dataCy="run-back-btn">
                        Back
                    </Button>
                    <Button 
                        className="bg-green-200" 
                        onClick={ handleSubmit } 
                        dataCy="run-submit-btn">
                        Submit
                    </Button>
                </div>
            </div>
        </main>
    )
}