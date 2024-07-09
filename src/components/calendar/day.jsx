export default function Day ({ dayNum, data }) {
    console.log(data)
    
    function handleClassName () {
        return (dayNum === "0") ? "opacity-0": "h-20 p-1 border border-solid border-gray-200";
    }

    return (
        <div className={ handleClassName() }>
            <div className="text-xs">{ dayNum }</div>
            <div className="text-xs text-center">Workout</div>
            <div className="text-xs text-center">Mileage</div>
            <div className="text-xs text-center">Time</div>
        </div>
    )
}