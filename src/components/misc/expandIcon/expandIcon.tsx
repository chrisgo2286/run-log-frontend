type ExpandIconTypes = {
    children: string,
    handleClick: () => void
}

export default function ExpandIcon ({ 
    children, 
    handleClick 
}: ExpandIconTypes): JSX.Element {
    return (
        <span className="expand-icon hover:cursor-pointer">
            <i 
                className="material-icons"
                data-cy="expand-icon"
                onClick={ handleClick }>
                { children }
            </i>
        </span>
    )
}