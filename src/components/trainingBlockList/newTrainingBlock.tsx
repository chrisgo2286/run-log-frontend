import Button from "../misc/button/button"
import { useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "./trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";
import { postTrainingBlock } from "../../misc/apiCalls";
import { validateTrainingBlock } from "./trainingBlockValidation";
import { Validation } from "../validation/validation";

const defaultFields = {
    title: "",
    startDate: "",
    endDate: "",
    cycleLength: "",
    goals: ""
}

type NewTrainingBlockProps = {
    trainingBlocks: TrainingBlockTypes[],
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NewTrainingBlock ({ 
    trainingBlocks,
    setTrainingUpdateReq
}: NewTrainingBlockProps ): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>(defaultFields)
    const [ errors, setErrors ] = useState<string[]>([])

    function handleSubmit () {
        const result = validateTrainingBlock(fields, trainingBlocks)
        if (result === "Valid") {
            createTrainingBlock()
            setErrors([])
        } else if (typeof result !== "string") {
            setErrors(result)
        }
    }
    
    async function createTrainingBlock () {
        const result = await postTrainingBlock(fields)
        if (result.status === 201) {
            setTrainingUpdateReq(true)
            setFields(defaultFields)
        }
    }

    return (
        <HiddenSection text="Add Training Block">
            <div className="rounded-md">
                <Validation className="flex flex-row flex-wrap w-1/2 sm:w-3/4 mx-auto" errors={ errors } />
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

