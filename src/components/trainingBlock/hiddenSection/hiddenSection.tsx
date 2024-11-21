import ChangeTrainingBlock from "./changeTrainingBlock";
import DeleteTrainingBlock from "./deleteTrainingBlock";
import NewTrainingBlock from "./newTrainingBlock";

export default function HiddenSection () {
    return (
        <section>
            <NewTrainingBlock />
            <DeleteTrainingBlock />
            <ChangeTrainingBlock />            
        </section>
    )
}