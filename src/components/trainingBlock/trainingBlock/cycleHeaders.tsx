import { useContext } from "react"
import { TrainingBlockContext } from "../../../misc/context"

export default function CycleHeaders () {
    const { data } = useContext(TrainingBlockContext)

    return (
        <div>
            { data.cycles.map((period) => (
                <div>{ period }</div>
            ))}
        </div>
    )
}