import Input from "../../misc/input/input"
import Select from "../../misc/select/select"
import TextArea from "../../misc/textarea/textarea"

export default function RunModalFields ({ fields, setFields }) {
    return (
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
                value={ fields.comment }
                fields={ fields }
                setFields={ setFields }/>
        </div>
    )
}