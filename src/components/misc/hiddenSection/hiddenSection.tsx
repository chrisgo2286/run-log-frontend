import { useState } from "react";
import ExpandIcon from "../expandIcon/expandIcon";
import "./hiddenSection.css"

type HiddenSectionProps = {
    children: JSX.Element,
    text: string
}
export default function HiddenSection ({ 
    children,
    text
}: HiddenSectionProps): JSX.Element {
    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false)

    function handleExpandClick (): void {
        setFiltersVisible(!filtersVisible)
    }
    
    function handleClassName () {
        return "border border-gray-200"
    }
    
    return (
        <section className={ handleClassName() }>
            <div 
                className="h-10 hover:bg-gray-200 hover:cursor-pointer" 
                onClick={ handleExpandClick }
                data-cy="expand-icon">
                <i className="absolute material-icons leading-10">{ filtersVisible ? "expand_less" : "expand_more" }</i>
                <div className="text-center leading-10">{ text }</div>
            </div>
            <div className={ (!filtersVisible) ? "filter-container collapsed":"filter-container" }>
                { children }
            </div>
                            
        </section>
    )
}