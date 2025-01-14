import { useContext } from "react"
import { TrainingBlockDataContext } from "../../misc/context"
import TrainingDay from "./trainingDay"

export default function TrainingBlockBody ({ trainingBlockId }: { trainingBlockId: string }): JSX.Element {
    const { data } = useContext(TrainingBlockDataContext)

    return (
        <div 
            className="flex flex-col justify-center"
            data-cy="training-block">
            { data.trainingData.map((trainingCycle, ndx) => (
                <div 
                    key={ ndx } 
                    className="grid grid-cols-12 mt-5 border-2 border-gray-500 rounded-md"
                    data-cy={`training-cycle-${ndx + 1}`}>
                    
                    <CycleHeader number={ ndx + 1 } />
                    
                    <div className="col-span-10 flex flex-wrap">
                        { trainingCycle.map((dayData, ndx2) => (
                            <TrainingDay 
                                key={ `${ndx}${ndx2}` } 
                                data={ dayData } 
                                trainingBlockId={ trainingBlockId }
                                dataRef={ `${ndx}${ndx2}` }/>
                        ))}  
                    </div>
                    
                    <CycleTotal ndx={ ndx } total={ data.totals[ndx] } />
                </div>
            ))}
        </div>
    )
}

function CycleHeader ({number}: { number: number }): JSX.Element {
    return (
        <div 
            className="col-span-1 border border-gray-300 flex justify-center items-center text-black text-lg bg-gray-200"
            data-cy={ `cycle-header-${number}`}>
            { number } 
        </div>
    )
}

function CycleTotal ({ ndx, total }: { ndx: number, total: string}): JSX.Element {
    return (
                
        <div className="col-span-1 border-l border-gray-300 flex justify-center items-center text-black text-md flex flex-col bg-gray-200">
            <div className="">Total</div>
            <div
                className=""
                data-cy={ `cycle-total-${ndx}`}>
                { total }
            </div>
            
        </div>        
        
    )
}