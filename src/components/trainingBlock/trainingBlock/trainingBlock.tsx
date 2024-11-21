import TrainingBlockBody from "./trainingBlockBody"
import TrainingBlockHeader from "./trainingBlockHeader"
import HiddenSection from "../hiddenSection/hiddenSection"

export default function TrainingBlockPage () {
    return (
        <main>
            <HiddenSection />
            <TrainingBlockHeader />
            <TrainingBlockBody />
        </main>
    )
}