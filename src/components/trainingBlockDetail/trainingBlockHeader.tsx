import { useNavigate } from "react-router-dom"
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"
import { NextArrow, PrevArrow } from "../misc/arrow/arrow"


type TrainingBlockHeaderProps = {
    title: string,
    trainingBlocks: TrainingBlockTypes[],
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TrainingBlockHeader ({ 
    title,
    trainingBlocks,
    setTrainingUpdateReq
}: TrainingBlockHeaderProps): JSX.Element {    
    
    const navigate = useNavigate()

    function handleClick (direction: "prev" | "next"): void {
        if (trainingBlocks.length < 2) {
            return;
        }
        const newIndex = getNewIndex(direction)
        navigate(`/trainingBlockDetail/${trainingBlocks[newIndex].id}`)
        setTrainingUpdateReq(true)
    }

    function getNewIndex (direction: "prev" | "next"): number {
        const curIndex = trainingBlocks.findIndex((trainingBlock) => trainingBlock.title === title )
        if (direction === "prev") {
            return (curIndex === 0) ? trainingBlocks.length - 1 : curIndex - 1
        } else {
            return (curIndex === trainingBlocks.length - 1) ? 0 : curIndex + 1
        }
    }

    return (
        <div className="flex justify-between items-center">
            <PrevArrow 
                className={ ( trainingBlocks.length > 1 ) ? "": "text-gray-200"}
                handleClick={() => handleClick("prev")} />
            <span 
                className="text-center mt-5 text-xl font-bold"
                data-cy="training-block-title">{ title }</span>          
            <NextArrow 
                className={ ( trainingBlocks.length > 1 ) ? "": "text-gray-200"}
                handleClick={() => handleClick("next")} />
        </div>

    )
}