import TrainingDays from "./trainingDays"
import CycleHeaders from "./cycleHeaders"

export default function TrainingBlockBody () {
    
    return (
        <div className="flex justify-center mt-5">
            <CycleHeaders />
            <TrainingDays />
        </div>
    )
}