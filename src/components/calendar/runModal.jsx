import Input from "../misc/input/input";
import Select from "../misc/select/select";
import TextArea from '../misc/textarea/textarea';

export default function RunModal ({ modalVisible, fields, setFields, submitRun }) {
    const visibleClass = "absolute flex flex-col top-1/3 left-1/3 w-1/3 border border-solid border-gray-200 bg-white rounded-md shadow-md" 
    console.log(fields)
    return (
        <div className={ (modalVisible) ? visibleClass : "hidden" }>
            <div className="h-16 text-xl font-bold border-b border-b-gray-200 bg-blue-100 flex flex-col items-center justify-center">
                <span>Add Run</span>
            </div>
            
            <div className="grid grid-cols-3 px-10 py-5">
                <div className="mb-3">Date</div>
                <Input
                    className="col-span-2 mb-3 rounded-md"
                    type="date"
                    name="date"
                    value={ fields.date }
                    fields={ fields }
                    setFields={ setFields } />
                <div className="mb-3">Run Type</div>
                <Select 
                    className="col-span-2 mb-3 rounded-md"
                    name="run_type"
                    initial={ fields.run_type }
                    options={["Easy Run", "Long Run", "Intervals", "Tempo Run"]}
                    fields={ fields }
                    setFields={ setFields } />
                <div className="mb-3">Distance</div>
                <Input 
                    className="col-span-2 mb-3 rounded-md"
                    type="number"
                    name="distance"
                    value={ fields.distance }
                    fields={ fields }
                    setFields={ setFields } />
                <div className="mb-3">Time</div>
                <Input 
                    className="col-span-2 mb-3 rounded-md"
                    type="number"
                    name="time"
                    value={ fields.time }
                    fields={ fields }
                    setFields={ setFields } />
                <div className="mb-3">Comment</div>
                <TextArea 
                    className="col-span-2 mb-3 border border-gray-300 rounded-md"
                    name="comment"
                    value={ fields.value }
                    fields={ fields }
                    setFields={ setFields }/>
            </div>
            <button 
                className="button w-20 h-8 mb-10 mx-auto border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
                onClick={ submitRun }>
                Submit
            </button>
        </div>
    )
}