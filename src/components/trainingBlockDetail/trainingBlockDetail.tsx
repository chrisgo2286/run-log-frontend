import { useState } from "react"
import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import { UseGetTrainingBlock, UseGetTrainingBlockData, UseGetTrainingBlocks } from "../../misc/hooks/trainingBlockHooks"
import { TrainingBlockDataContext, TrainingBlockContext } from "../../misc/context"
import { getTrainingBlockFromId } from "../../misc/miscFunctions"
import UpdateTrainingBlock from "./updateTrainingBlock"

export default function TrainingBlockDetail () {
    const id = window.location.href.split("trainingBlockDetail/")[1]
    const { trainingBlocks, setTrainingUpdateReq } = UseGetTrainingBlocks()
    const { data, setUpdateRequired } = UseGetTrainingBlockData(parseInt(id))
    const trainingBlock = UseGetTrainingBlock(parseInt(id), trainingBlocks)
    
    function getTitle () {
        const result = getTrainingBlockFromId(parseInt(id), trainingBlocks)
        return ( result ) ? result.title : ""
    }

    return (
        <main className="w-screen pt-16">
            <div className="max-w-screen-lg mx-auto border border-gray-200">
                <UpdateTrainingBlock 
                    trainingBlock={ trainingBlock }
                    trainingBlockId={ id }
                    trainingBlocks={ trainingBlocks } />
                <TrainingBlockDataContext.Provider value={{ data, setUpdateRequired }}>
                    <TrainingBlockHeader 
                        title={ getTitle() }
                        trainingBlocks={ trainingBlocks }
                        setTrainingUpdateReq={ setTrainingUpdateReq }/>
                    <TrainingBlockBody trainingBlockId={ id }/>
                </TrainingBlockDataContext.Provider>         
            </div>
        </main>
    )
}

