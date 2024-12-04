import { useNavigate } from "react-router-dom"
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"
import { deleteTrainingBlock } from "../../misc/apiCalls"

type TrainingBlockListItemProps = {
    data: TrainingBlockTypes,
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TrainingBlockListItem ({ 
    data,
    setTrainingUpdateReq
}: TrainingBlockListItemProps): JSX.Element {

    const navigate = useNavigate()

    function handleClick () {
        navigate(`/trainingBlockDetail/${data.id}`)
    }

    //Create modal window to confirm delete
    async function handleDelete (event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        if (data.id) {
            const result = await deleteTrainingBlock(data.id)
            if (result.status === 204) {
                setTrainingUpdateReq(true)
            }
        }
        
    }

    return (
        <div 
            className="grid grid-cols-5 text-center border-b border-gray-200 h-10 mt-2 text-xs sm:text-sm hover:cursor-pointer hover:bg-gray-100 "
            onClick={ handleClick }>
            <div>{ data.title }</div>
            <div>{ data.startDate }</div>
            <div>{ data.endDate }</div>
            <div>{ data.cycleLength }</div>
            <div className="hover:bg-gray-200" onClick={ (event) => handleDelete(event) }>x</div>
        </div>
        
    )
}

