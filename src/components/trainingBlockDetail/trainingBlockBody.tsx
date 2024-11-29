import { useContext } from "react"
import { TrainingBlockDataContext } from "../../misc/context"
import TrainingDay from "./trainingDay"
import { TrainingBlockDayTypes } from "../../misc/hooks/trainingBlockHooks"

export default function TrainingBlockBody () {
    const { data } = useContext(TrainingBlockDataContext)

    return (
        <div className="flex flex-col justify-center items-center">
            { data.trainingData.map((trainingCycle, ndx) => (
                <div key={ ndx } className="flex mt-5 border-2 border-gray-500 w-125">
                    <CycleHeader number={ ndx + 1 } />
                    <TrainingDays trainingCycle={ trainingCycle }/>
                </div>
            ))}
        </div>
    )
}

function TrainingDays ({ trainingCycle }: { trainingCycle: TrainingBlockDayTypes[] }): JSX.Element {
    return (
        <div className="flex flex-wrap w-120">
            { trainingCycle.map((dayData, ndx) => (
                <TrainingDay key={ ndx } data={ dayData } />
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