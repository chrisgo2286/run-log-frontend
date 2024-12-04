import Button from "../misc/button/button"
import { useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "./trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";
import { postTrainingBlock } from "../../misc/apiCalls";

const defaultFields = {
    title: "",
    startDate: "",
    endDate: "",
    cycleLength: "",
    goals: ""
}

export default function NewTrainingBlock ({ 
    setTrainingUpdateReq
}: { setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>(defaultFields)

    async function handleSubmit () {
        const result = await postTrainingBlock(fields)
        if (result.status === 201) {
            setTrainingUpdateReq(true)
            setFields(defaultFields)
        }
    } 

    return (
        <HiddenSection text="Add Training Block">
            <div className="rounded-md">
                <TrainingBlockFields fields={ fields } setFields={ setFields } />
                <Button
                    className="h-8 max-w-30 bg-green-100 mx-auto mb-5"
                    onClick={ handleSubmit }
                    dataCy="submit-btn">
                    Submit
                </Button> 
            </div>
        </HiddenSection>
    )
}

