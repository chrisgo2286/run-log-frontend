import { useNavigate } from "react-router-dom";
import { TrainingBlockDayTypes } from "../../misc/hooks/trainingBlockHooks";
import { navToRunDetail } from "../../misc/navFunctions";

type TrainingDayProps = {
    data: TrainingBlockDayTypes,
    trainingBlockId: string
}
export default function TrainingDay ({ 
    data,
    trainingBlockId 
}: TrainingDayProps): JSX.Element {
    
    const navigate = useNavigate()
    
    function handleClick () {
        navToRunDetail(navigate, data, trainingBlockId)
    }

    return (
        <div 
            className="text-xs h-24 w-28 border border-gray-200 pl-1 pt-1 grid grid-rows-12 hover:bg-gray-200 hover:cursor-pointer"
            onClick={ handleClick }>
            <div className="row-span-1">{ data.label }</div>
            { (data.id) ? runData(data) : null}
        </div>
    )
}

function runData (data: TrainingBlockDayTypes) {
    return (
        <div className="flex flex-col justify-center items-center row-span-11 mb-2">
            <div>{ data.run_type } ({data.distance})</div>
        </div>
        
    
    )
}