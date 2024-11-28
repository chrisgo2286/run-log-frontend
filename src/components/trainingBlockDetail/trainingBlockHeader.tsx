import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"
import { NextArrow, PrevArrow } from "../misc/arrow/arrow"


type TrainingBlockHeaderProp = {
    title: string
}

export default function TrainingBlockHeader ({ 
    title 
}: TrainingBlockHeaderProp): JSX.Element {    
    
    function handleClick (direction: string): void {
        console.log(`${direction} arrow clicked!`)
    }

    return (
        <div className="flex justify-between items-center">
            <PrevArrow handleClick={() => handleClick("prev")} />
            <span className="text-center mt-5 text-xl font-bold">{ title }</span>
            <NextArrow handleClick={() => handleClick("next")} />
        </div>

    )
}