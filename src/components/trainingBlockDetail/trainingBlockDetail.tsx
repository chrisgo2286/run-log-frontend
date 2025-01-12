import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import { UseGetTrainingBlock, UseGetTrainingBlockData, UseGetTrainingBlocks } from "../../misc/hooks/trainingBlockHooks"
import { TrainingBlockDataContext } from "../../misc/context"
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

    function handleClassName () {
        const baseClass = "mx-auto border border-gray-200"
        return `${baseClass} ${getScreenSize()}`
    }

    function getScreenSize () {
        switch(trainingBlock.cycleLength.toString()) {
            case "3":
                return "max-w-103";
                break;
            case "4":
                return "max-w-136";
                break;
            case "5":
                return "max-w-170";
                break;
            case "6":
                return "max-w-204";
                break;
            default:
                return "max-w-237";
        }
    }

    return (
        <main className="w-screen pt-16">
            <div className={ handleClassName() }>
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

