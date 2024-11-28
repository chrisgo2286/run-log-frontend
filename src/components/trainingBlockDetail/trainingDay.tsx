import { TrainingBlockDayTypes } from "../../misc/hooks/trainingBlockHooks";

export default function TrainingDay ({ 
    data 
}: { data: TrainingBlockDayTypes}): JSX.Element {
    
    return (
        <div className="text-xs h-24 w-28 border border-gray-200 pl-1 pt-1 grid grid-rows-12">
            <div className="row-span-1">
                <span>{ data.date } </span>
                <span>({ data.day })</span>
            </div>
            { (data.id) ? runData(data) : null}
        </div>
    )
}

function runData (data: TrainingBlockDayTypes) {
    return (
        <div className="flex flex-col justify-center items-center row-span-11 mb-2">
            <div>{ data.type } ({data.distance})</div>
        </div>
        
    
    )
}