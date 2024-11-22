import { useState } from "react"
import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import HiddenSection from "../hiddenSection/hiddenSection"
import { UseGetTrainingBlockData } from "../../../misc/hooks/useGetTrainingBlockData"
import { TrainingBlockContext } from "../../../misc/context"

export default function TrainingBlockPage () {
    const [ currentId, setCurrentId ] = useState<number>(1)
    const { data, setUpdateRequired } = UseGetTrainingBlockData(currentId)

    return (
        <main>
            <HiddenSection />
            <TrainingBlockHeader />
            <TrainingBlockContext.Provider value={{ data, setUpdateRequired }}>
                <TrainingBlockBody />
            </TrainingBlockContext.Provider>
        </main>
    )
}

