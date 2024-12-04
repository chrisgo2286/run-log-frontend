import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../../misc/button/button"
import { RunTypes } from "../../../misc/hooks/trainingBlockHooks"
import RunDetailFields from "./runDetailFields"

export default function RunDetail (): JSX.Element {
    const navigate = useNavigate()
    const { data, trainingBlockId } = useLocation().state
    const [ fields, setFields ] = useState<RunTypes>({
        id: (data.id) ? data.id : "",
        date: (data.date) ? data.date: "",
        type: (data.type) ? data.type : "Easy Run",
        distance: (data.distance) ? data.distance : "",
        hours: (data.hours) ? data.hours : "",
        minutes: (data.minutes) ? data.minutes : "",
        seconds: (data.seconds) ? data.seconds : "",
        comments: (data.comments) ? data.comments: "",
    })

    function handleSubmit () {
        console.log("Run Submitted!")
    }

    function handleBack () {
        navigate(`/trainingBlockDetail/${trainingBlockId}`)
    }

    return (
        <main className="">
            <div className="border border-gray-200 w-120 flex flex-col justify-center items-center mx-auto mt-5 rounded-md p-5">
                <div className="">Add Run</div>
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