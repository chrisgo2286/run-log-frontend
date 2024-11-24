import { useState } from "react"
import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import HiddenSection from "../misc/hiddenSection/hiddenSection"
import { UseGetTrainingBlockData } from "../../misc/hooks/trainingBlockHooks"
import { TrainingBlockDataContext } from "../../misc/context"

export default function TrainingBlockDetail () {
    const [ currentId, setCurrentId ] = useState<number>(0)
    const { data, setUpdateRequired } = UseGetTrainingBlockData(currentId)

    return (
        <main className="w-screen">
            <div className="max-w-screen-lg mx-auto my-10 border border-gray-200">
                <HiddenSection />
                <TrainingBlockDataContext.Provider value={{ data, setUpdateRequired }}>
                    <TrainingBlockHeader />
                    <TrainingBlockBody />
                </TrainingBlockDataContext.Provider>         
            </div>
        </main>
    )
}

