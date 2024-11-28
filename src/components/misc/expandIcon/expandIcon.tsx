type ExpandIconTypes = {
    iconType: string,
    handleClick: () => void
}

export default function ExpandIcon ({ 
    iconType,
    handleClick 
}: ExpandIconTypes): JSX.Element {
    return (
        <span className="expand-icon hover:cursor-pointer">
            <i 
                className="material-icons"
                data-cy="expand-icon"
                onClick={ handleClick }>
                { iconType }
            </i>
        </span>
    )
}