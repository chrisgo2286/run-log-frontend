import { useState } from 'react';
import Input from "../misc/input/input";
import Select from "../misc/select/select";

export default function RunModal ({ modalVisible }) {
    const [ fields, setFields ] = useState({
        date: "",
        run_type: "",
        distance: "",
        time: "",
        comment: ""
    })
    const visibleClass = "absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-solid border-gray-200 bg-white" 

    return (
        <div className={ (modalVisible) ? visibleClass : "hidden" }>
            <div className="grid grid-cols-2">
                <div>Date</div>
                <Input
                    className=""
                    type="date"
                    name="date"
                    value={ fields.date }
                    fields={ fields }
                    setFields={ setFields } />
                <div>Run Type</div>
                <Select 
                    className=""
                    name="run_type"
                    initial="Easy Run"
                    options={["Easy Run", "Long Run", "Intervals", "Tempo Run"]}
                    fields={ fields }
                    setFields={ setFields } />
                <div>Distance</div>
                <Input 
                    className=""
                    type="number"
                    name="distance"
                    value={ fields.distance }
                    fields={ fields }
                    setFields={ setFields } />
                <div>Time</div>
                <Input 
                    className=""
                    type="number"
                    name="time"
                    value={ fields.time }
                    fields={ fields }
                    setFields={ setFields } />
                <div>Comment</div>
                <textarea />
            </div>
            <button>Add Run</button>

        </div>
    )
}