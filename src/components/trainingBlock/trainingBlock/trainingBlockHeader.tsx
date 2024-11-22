import { NextArrow, PrevArrow } from "../../misc/arrow/arrow"

export default function TrainingBlockHeader () {
    function handleClick (direction: string): void {
        console.log(`${direction} arrow clicked!`)
    }
    
    return (
        <div className="flex justify-between items-center">
            <PrevArrow handleClick={() => handleClick("prev")} />
            <span className="text-center mt-5 text-xl font-bold">Summer Training Block</span>
            <NextArrow handleClick={() => handleClick("next")} />
        </div>

    )
}