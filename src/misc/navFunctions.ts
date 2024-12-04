import { NavigateFunction, useNavigate } from "react-router-dom";
import { TrainingBlockDayTypes } from "./hooks/trainingBlockHooks";

export function navToRunDetail (
    navigate: NavigateFunction, 
    data: TrainingBlockDayTypes,
    trainingBlockId: string
): void {
    navigate("/runDetail", {
        state: { 
            data: data,
            trainingBlockId: trainingBlockId
        }
    })
}
