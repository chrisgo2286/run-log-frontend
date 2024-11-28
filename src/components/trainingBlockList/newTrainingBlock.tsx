import Button from "../misc/button/button"
import { useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "./trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";

export default function NewTrainingBlock ({ 
    setTrainingUpdateReq
}: { setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>({
        title: "",
        startDate: "",
        endDate: "",
        cycleLength: "",
        goals: ""
    })

    function handleSubmit () {
        console.log("TrainingBlockSubmitted!")
    } 

    return (
        <HiddenSection text="Add Training Block">
            <div className="rounded-md py-5">
                <TrainingBlockFields fields={ fields } setFields={ setFields } />
                <Button
                    className="h-8 max-w-30 bg-green-100 mx-auto"
                    onClick={ handleSubmit }
                    dataCy="submit-btn">
                    Submit
                </Button> 
            </div>
        </HiddenSection>
    )
}

