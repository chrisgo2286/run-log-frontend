import { useContext } from "react"
import { TrainingBlockDataContext } from "../../misc/context"

export default function CycleHeaders () {
    const { data } = useContext(TrainingBlockDataContext)

    return (
        <div className="flex flex-col">
            { data.cycles.map((period, ndx) => (
                <div 
                    className="w-12 h-24 border border-gray-300 flex justify-center items-center text-black text-lg bg-gray-200" 
                    key={ ndx }>
                    { period }
                </div>
            ))}
        </div>
    )
}