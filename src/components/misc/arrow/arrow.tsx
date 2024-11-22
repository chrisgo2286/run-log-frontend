export function PrevArrow ({ handleClick }: {handleClick: () => void}) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            data-cy="prev-arrow"
            onClick={ handleClick }>
            navigate_before
        </span>
    )
}

export function NextArrow ({ handleClick }: {handleClick: () => void}) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            data-cy="next-arrow"
            onClick={ handleClick }>
            navigate_next
        </span>
    )
}