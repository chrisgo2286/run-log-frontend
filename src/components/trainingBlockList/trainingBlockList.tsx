import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"
import TrainingBlockListItem from "./trainingBlockListItem"

export default function TrainingBlockList ({ 
    trainingBlocks 
}: { trainingBlocks: TrainingBlockTypes[] }): JSX.Element {
    
    return (
        <div className="max-w-screen-lg mx-auto mt-5 px-10">
            <Headers />
            { trainingBlocks.map((trainingBlock, ndx) => (
                <div key={ ndx }>
                    <TrainingBlockListItem data={ trainingBlock } />
                </div>
            ))}
        </div>
            
    )
}

function Headers (): JSX.Element {
    return (
        <div className="grid grid-cols-5 font-bold border-b border-gray-200 h-8 text-center">
            <div>Title</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Cycle Length</div>
            <div>Delete</div>
        </div>
    )
}