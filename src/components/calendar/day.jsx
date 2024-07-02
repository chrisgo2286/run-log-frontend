export default function Day ({ dayNum }) {
    return (
        <div className="h-20 p-1 border border-solid border-gray-200">
            <div className="text-xs">{ dayNum }</div>
            <div className="text-xs text-center">Workout</div>
            <div className="text-xs text-center">Mileage</div>
        </div>
    )
}