import { useEffect, useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "../trainingBlockList/trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";
import Button from "../misc/button/button";
import { patchTrainingBlock } from "../../misc/apiCalls";

type UpdateTrainingBlockProps = {
    trainingBlock: TrainingBlockTypes,
    trainingBlockId: string,
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdateTrainingBlock ({ 
    trainingBlock,
    trainingBlockId,
    setTrainingUpdateReq,
}: UpdateTrainingBlockProps): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>({
        title: "",
        startDate: "",
        endDate: "",
        cycleLength: "",
        goals: ""
    })
    
    useEffect(() => {
        setFields(trainingBlock)
    }, [trainingBlock])

    async function handleUpdate () {
        //need to validate fields
        const result = await patchTrainingBlock(fields, trainingBlockId)
        if (result.status === 200) {
            setTrainingUpdateReq(true)
        }
    } 

    return (
        <HiddenSection text="Update Training Block">
            <div className="rounded-md">
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

