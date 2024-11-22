import { useContext } from "react"
import { TrainingBlockContext } from "../../../misc/context"

export default function CycleHeaders () {
    const { data } = useContext(TrainingBlockContext)

    return (
        <div className="flex flex-col">
            { data.cycles.map((period, ndx) => (
                <div className="w-28 h-28 border border-gray-200 flex pl-2 items-center" key={ ndx }>{ period }</div>
            ))}
        </div>
    )
}