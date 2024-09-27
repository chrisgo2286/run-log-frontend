type WeeklyTotalsProp = {
    data: string[]
}

export default function WeeklyTotals ({ 
    data 
}: WeeklyTotalsProp): JSX.Element {

    return (
        <div className="w-1/12">
            <div className="border border-solid border-gray-200 text-center" key="total">Total</div>
            { data?.map((value, ndx) => (
            <div className="border border-solid border-gray-200 h-20 flex items-center justify-center text-md" key={ ndx }>{ value }</div>
            ))}
        </div>
    )
}