import { TrainingBlockDayTypes } from "../../misc/hooks/trainingBlockHooks";

export default function TrainingDay ({ 
    data 
}: { data: TrainingBlockDayTypes}): JSX.Element {
    
    return (
        <div className="h-28 w-28 border border-gray-200">
            <div>
                <span>{ data.date }</span>
                <span>{ data.day }</span>
            </div>
            { (data.id) ? runData(data) : null}
        </div>
    )
}

function runData (data: TrainingBlockDayTypes) {
    return (
        <>
            <div>{ data.type }</div>
            <div>{ data.distance }</div>
            <div>
                <span>{ data.hours }</span>
                <span>{ data.minutes }</span>
                <span>{ data.seconds }</span>
            </div>

        </>
        
    
    )
}