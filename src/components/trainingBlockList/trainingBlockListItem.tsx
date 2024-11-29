import { useNavigate } from "react-router-dom"
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"

type TrainingBlockListItemProps = {
    data: TrainingBlockTypes
}

export default function TrainingBlockListItem ({ 
    data 
}: TrainingBlockListItemProps): JSX.Element {

    const navigate = useNavigate()

    function handleClick () {
        navigate(`/trainingBlockDetail/${data.id}`)
    }

    return (
        <div 
            className="grid grid-cols-5 text-center border-b border-gray-200 h-10 mt-2 text-xs sm:text-sm hover:cursor-pointer hover:bg-gray-100 "
            onClick={ handleClick }>
            <div>{ data.title }</div>
            <div>{ data.startDate }</div>
            <div>{ data.endDate }</div>
            <div>{ data.cycleLength }</div>
            <div>x</div>
        </div>
        
    )
}

