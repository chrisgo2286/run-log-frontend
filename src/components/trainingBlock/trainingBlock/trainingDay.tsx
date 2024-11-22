import { TrainingBlockItemTypes } from "../../../misc/hooks/useGetTrainingBlockData";

export default function TrainingDay ({ 
    data 
}: { data: TrainingBlockItemTypes}): JSX.Element {
    
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

function runData (data: TrainingBlockItemTypes) {
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