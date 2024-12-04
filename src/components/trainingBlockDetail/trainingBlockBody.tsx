import { useContext } from "react"
import { TrainingBlockDataContext } from "../../misc/context"
import TrainingDay from "./trainingDay"

export default function TrainingBlockBody ({ trainingBlockId }: { trainingBlockId: string }): JSX.Element {
    const { data } = useContext(TrainingBlockDataContext)

    return (
        <div className="flex flex-col justify-center items-center">
            { data.trainingData.map((trainingCycle, ndx) => (
                <div key={ ndx } className="flex mt-5 border-2 border-gray-500">
                    <CycleHeader number={ ndx + 1 } />
                    
                    <div className="flex flex-wrap">
                        { trainingCycle.map((dayData, ndx) => (
                            <TrainingDay key={ ndx } data={ dayData } trainingBlockId={ trainingBlockId }/>
                        ))}  
                    </div>
                
                </div>
            ))}
        </div>
    )
}

function CycleHeader ({number}: { number: number }): JSX.Element {
    return (
        <div className="w-12 border border-gray-300 flex justify-center items-center text-black text-lg bg-gray-200">
            { number } 
        </div>
    )
}