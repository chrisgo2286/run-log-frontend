import { useState } from "react"
import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import HiddenSection from "../hiddenSection/hiddenSection"
import { UseGetTrainingBlockData } from "../../../misc/hooks/useGetTrainingBlockData"
import { TrainingBlockContext } from "../../../misc/context"

export default function TrainingBlock () {
    const [ currentId, setCurrentId ] = useState<number>(1) //Need to pull first training block by default
    const { data, setUpdateRequired } = UseGetTrainingBlockData(currentId)

    return (
        <main className="w-screen">
            <div className="max-w-screen-lg mx-auto my-10 border border-gray-200">
                <HiddenSection />
                <TrainingBlockHeader />
                <TrainingBlockContext.Provider value={{ data, setUpdateRequired }}>
                    <TrainingBlockBody />
                </TrainingBlockContext.Provider>
            </div>
        </main>
    )
}

