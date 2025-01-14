import { useEffect, useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "../trainingBlockList/trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";
import Button from "../misc/button/button";
import { patchTrainingBlock } from "../../misc/apiCalls";
import { refreshPage } from "../../misc/miscFunctions";
import { validateUpdateTrainingBlock } from "../trainingBlockList/trainingBlockValidation";
import { Validation } from "../validation/validation";

type UpdateTrainingBlockProps = {
    trainingBlock: TrainingBlockTypes,
    trainingBlockId: string,
    trainingBlocks: TrainingBlockTypes[]
}

export default function UpdateTrainingBlock ({ 
    trainingBlock,
    trainingBlockId,
    trainingBlocks,
}: UpdateTrainingBlockProps): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>({
        title: "",
        startDate: "",
        endDate: "",
        cycleLength: "",
        goals: ""
    })
    const [ errors, setErrors ] = useState<string[]>([])
    
    useEffect(() => {
        setFields(trainingBlock)
    }, [trainingBlock])

    function handleUpdate (): void {
        const result = validateUpdateTrainingBlock(fields, trainingBlockId, trainingBlocks)
        if (result === "Valid") {
            updateTrainingBlock()
        } else if (typeof result !== "string") {
            setErrors(result)
        }
    } 

    async function updateTrainingBlock (): Promise<void> {
        const result = await patchTrainingBlock(fields, trainingBlockId)
        if (result.status === 200) {
            refreshPage()
        } else {
            setErrors(["There was an error updating this Training Block!"])
        }
    }

    return (
        <HiddenSection text="Update Training Block">
            <div className="rounded-md">
                <Validation className="flex flex-row flex-wrap w-1/2 sm:w-3/4 mx-auto" errors={ errors } />
                <TrainingBlockFields fields={ fields } setFields={ setFields } />
                <Button
                    className="h-8 max-w-30 bg-green-100 mx-auto mb-5"
                    onClick={ handleUpdate }
                    dataCy="submit-btn">
                    Submit
                </Button> 
            </div>
        </HiddenSection>
    )
}

