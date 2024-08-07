import Input from "../../misc/input/input"
import Select from "../../misc/select/select"
import TextArea from "../../misc/textarea/textarea"
import { RunModalFieldsProps } from "./runModalTypes"

export default function RunModalFields ({ 
    fields, 
    setFields 
}: RunModalFieldsProps): JSX.Element {
    return (
        <div className="grid grid-cols-3 px-10 py-5">
            <div 
                className="mb-3"
                data-cy="date-label">
                Date
            </div>
            <Input
                className="col-span-2 mb-3 rounded-md"
                type="date"
                name="date"
                value={ (fields.date) ? fields.date: "" }
                fields={ fields }
                setFields={ setFields } 
                data-cy="date-field"/>
            <div 
                className="mb-3"
                data-cy="run-type-label">
                Run Type
            </div>
            <Select 
                className="col-span-2 mb-3 rounded-md"
                name="run_type"
                initial={ (fields.run_type) ? fields.run_type: "Easy Run" }
                options={["Easy Run", "Long Run", "Intervals", "Tempo Run"]}
                fields={ fields }
                setFields={ setFields } 
                data-cy="run-type-field"/>
            <div 
                className="mb-3"
                data-cy="distance-label">
                Distance
            </div>
            <Input 
                className="col-span-2 mb-3 rounded-md"
                type="number"
                name="distance"
                value={ (fields.distance) ? fields.distance: "" }
                fields={ fields }
                setFields={ setFields }
                data-cy="distance-field" />
            <div 
                className="mb-3"
                data-cy="time-label">
                Time
            </div>
            <Input 
                className="col-span-2 mb-3 rounded-md"
                type="number"
                name="time"
                value={ (fields.time) ? fields.time: "" }
                fields={ fields }
                setFields={ setFields } 
                data-cy="time-field" />
            <div 
                className="mb-3"
                data-cy="comment-label">
                Comment
            </div>
            <TextArea 
                className="col-span-2 mb-3 border border-gray-300 rounded-md"
                name="comment"
                value={ (fields.comment) ? fields.comment: "" }
                fields={ fields }
                setFields={ setFields }
                data-cy="comment-field" />
        </div>
    )
}