import { useContext } from "react"
import { TrainingBlockContext } from "../../../misc/context"
import TrainingDay from "./trainingDay"

export default function TrainingDays () {
    const { data } = useContext(TrainingBlockContext)

    return (
        <div>
            { data.trainingData.map((trainingDay) => (
                <TrainingDay key={ trainingDay.id } data={ trainingDay } />
            ))}    
        </div>
    )
}