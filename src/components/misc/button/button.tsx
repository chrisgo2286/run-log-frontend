type ButtonTypes =  {
    children: string,
    className?: string,
    onClick: () => void,
    dataCy?: string
}

export default function Button ({
    children,
    className,
    onClick,
    dataCy,
}: ButtonTypes): JSX.Element {
    
    const classNames = [
        "border border-gray-400",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "rounded-md",
        "w-36",
        "h-6",
        "hover:bg-green-300",
        "hover:cursor-pointer"
    ].join(" ")
    
    function handleClassNames () {
        return (className) ? `${ classNames } ${ className }`: classNames; 
    }
    return (
        <div 
            className={ handleClassNames() }
            onClick={ onClick } 
            data-cy={ dataCy }>
            { children }
        </div>
    )
}