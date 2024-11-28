import { useEffect, useState } from "react";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import TrainingBlockFields from "../trainingBlockList/trainingBlockFields";
import HiddenSection from "../misc/hiddenSection/hiddenSection";
import Button from "../misc/button/button";

type UpdateTrainingBlockProps = {
    trainingBlock: TrainingBlockTypes
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function UpdateTrainingBlock ({ 
    trainingBlock,
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
        console.log("UseEffectRun")
    }, [trainingBlock])

    function handleUpdate () {
        console.log(fields)
    } 

    return (
        <HiddenSection text="Update Training Block">
            <div className="rounded-md py-5">
                <TrainingBlockFields fields={ fields } setFields={ setFields } />
                <Button
                    className="h-8 max-w-30 bg-green-100 mx-auto"
                    onClick={ handleUpdate }
                    dataCy="submit-btn">
                    Submit
                </Button> 
            </div>
        </HiddenSection>
    )
}

