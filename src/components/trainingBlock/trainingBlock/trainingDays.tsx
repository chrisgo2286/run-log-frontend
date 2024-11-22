import { useContext } from "react"
import { TrainingBlockContext } from "../../../misc/context"
import TrainingDay from "./trainingDay"

export default function TrainingDays () {
    const { data } = useContext(TrainingBlockContext)
    console.log(data)
    return (
        <div>
            { data.trainingData.map((trainingRow, ndx) => (
                <div key={ ndx } className="flex">
                    { trainingRow.map((trainingDay, ndx) => (
                        <TrainingDay key={ ndx } data={ trainingDay } />
                    ))}  
                </div>
            ))}  
        </div>
    )
}