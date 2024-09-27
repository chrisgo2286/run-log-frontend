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
                className="col-span-2 mb-3 rounded-md pl-4"
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
                className="col-span-2 mb-3 rounded-md pl-4"
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
                className="col-span-2 mb-3 rounded-md pl-4"
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
            <div className="flex flex-row col-span-2 mb-3">
                <Input
                    className="w-1/3 rounded-md text-center"
                    type="number"
                    name="hours"
                    value={ (fields.hours) ? fields.hours: ""}
                    fields={ fields }
                    setFields={ setFields }
                    placeholder="hh"
                    data-cy="hours-field" />
                <Input
                    className="w-1/3 rounded-md text-center"
                    type="number"
                    name="minutes"
                    value={ (fields.minutes) ? fields.minutes: ""}
                    fields={ fields }
                    setFields={ setFields }
                    placeholder="mm"
                    data-cy="minutes-field" />
                <Input
                    className="w-1/3 rounded-md text-center"
                    type="number"
                    name="seconds"
                    value={ (fields.seconds) ? fields.seconds: ""}
                    fields={ fields }
                    setFields={ setFields }
                    placeholder="ss"
                    data-cy="seconds-field" />
            </div>
            <div 
                className="mb-3"
                data-cy="comment-label">
                Comment
            </div>
            <TextArea 
                className="col-span-2 mb-3 border border-gray-300 rounded-md pl-4"
                name="comment"
                value={ (fields.comment) ? fields.comment: "" }
                fields={ fields }
                setFields={ setFields }
                data-cy="comment-field" />
        </div>
    )
}