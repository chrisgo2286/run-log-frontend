import { useState } from "react";
import ExpandIcon from "../../misc/expandIcon/expandIcon";
import ChangeTrainingBlock from "./changeTrainingBlock";
import DeleteTrainingBlock from "./deleteTrainingBlock";
import NewTrainingBlock from "./newTrainingBlock";
import "./hiddenSection.css"

export default function HiddenSection () {
    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false)

    function handleExpandIconClick (): void {
        setFiltersVisible(!filtersVisible)
    }
    
    function handleClassName () {
        return "border border-gray-200"
    }
    
    return (
        <section className={ handleClassName() }>
            <ExpandIcon handleClick={ handleExpandIconClick }>
                { filtersVisible ? "expand_less" : "expand_more" }
            </ExpandIcon>
            <div className={ (!filtersVisible) ? "filter-container collapsed":"filter-container" }>
                <NewTrainingBlock />
                <DeleteTrainingBlock />
                <ChangeTrainingBlock />
            </div>
                            
        </section>
    )
}