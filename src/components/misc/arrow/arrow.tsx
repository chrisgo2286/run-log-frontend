type ArrowProps = {
    className?: string,
    handleClick: () => void
}
export function PrevArrow ({
    className,
    handleClick
}: ArrowProps): JSX.Element {
    return (
        <span 
            className={ `hover:cursor-pointer material-icons ${className}` }
            data-cy="prev-arrow"
            onClick={ handleClick }>
            navigate_before
        </span>
    )
}

export function NextArrow ({ 
    className,
    handleClick
}: ArrowProps): JSX.Element {
    return (
        <span 
            className={ `hover:cursor-pointer material-icons ${className}` }
            data-cy="next-arrow"
            onClick={ handleClick }>
            navigate_next
        </span>
    )
}