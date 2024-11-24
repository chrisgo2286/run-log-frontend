import { useState } from "react";
import ExpandIcon from "../expandIcon/expandIcon";
import "./hiddenSection.css"

export default function HiddenSection ({ 
    children 
}: {children?: JSX.Element}): JSX.Element {
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
                { children }
            </div>
                            
        </section>
    )
}