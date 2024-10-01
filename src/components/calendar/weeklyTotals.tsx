import { useContext } from "react"
import { DataContext } from "../../misc/context"

export default function WeeklyTotals (): JSX.Element {

    const { data } = useContext(DataContext)

    return (
        <div className="w-1/12">
            <div className="border border-solid border-gray-200 text-center" key="total">Total</div>
            { data.weeklyTotals?.map((value, ndx) => (
            <div className="border border-solid border-gray-200 h-20 flex items-center justify-center text-md" key={ ndx }>{ value }</div>
            ))}
        </div>
    )
}