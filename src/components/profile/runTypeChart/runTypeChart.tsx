import { useState, useEffect } from 'react'
import RunTypeChartBody from "./runTypeChartBody"
import RunTypeChartHeader from "./runTypeChartHeader"

export default function RunTypeChart () {
    
    const curDate = new Date()
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear()
    })
    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(dataSample)
    }, [])

    return (
        <div className="w-96 h-64 border border-gray-200 rounded-md shadow-md">
            <RunTypeChartHeader period={ period } setPeriod={ setPeriod } />
            <RunTypeChartBody data={ data } />
        </div>
    )
}

const dataSample = [
    {"name": "Long Run", "distance": 30},
    {"name": "Easy Run", "distance": 120},
    {"name": "Intervals", "distance": 20},
    {"name": "Tempo", "distance": 40}
]