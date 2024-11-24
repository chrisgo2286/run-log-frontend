import TrainingBlockList from "./trainingBlockList";
import NewTrainingBlock from "./newTrainingBlock";
import { UseGetTrainingBlocks } from "../../misc/hooks/trainingBlockHooks";

export default function TrainingBlockListPage () {
    const { trainingBlocks, setTrainingUpdateReq } = UseGetTrainingBlocks()
    
    return (
        <main className="w-screen">
            <div className="max-w-screen-lg mx-auto mt-5">
                <NewTrainingBlock setTrainingUpdateReq={ setTrainingUpdateReq }/>
                <TrainingBlockList trainingBlocks={ trainingBlocks }/>
            </div>

        </main>
            
    )
}