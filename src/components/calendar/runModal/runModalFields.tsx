import { useContext } from "react"
import { RunFieldsContext } from "../../../misc/context"
import Input from "../../misc/input/input"
import Select from "../../misc/select/select"
import TextArea from "../../misc/textarea/textarea"

export default function RunModalFields (): JSX.Element {
    const { runFields, setRunFields } = useContext(RunFieldsContext)

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
                value={ (runFields.date) ? runFields.date: "" }
                fields={ runFields }
                setFields={ setRunFields } 
                data-cy="date-field"/>
            <div 
                className="mb-3"
                data-cy="run-type-label">
                Run Type
            </div>
            <Select 
                className="col-span-2 mb-3 rounded-md pl-4"
                name="run_type"
                initial={ (runFields.run_type) ? runFields.run_type: "Easy Run" }
                options={["Easy Run", "Long Run", "Intervals", "Tempo Run"]}
                fields={ runFields }
                setFields={ setRunFields } 
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
                value={ (runFields.distance) ? runFields.distance: "" }
                fields={ runFields }
                setFields={ setRunFields }
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
                    value={ (runFields.hours) ? runFields.hours: ""}
                    fields={ runFields }
                    setFields={ setRunFields }
                    placeholder="hh"
                    data-cy="hours-field" />
                <Input
                    className="w-1/3 rounded-md text-center"
                    type="number"
                    name="minutes"
                    value={ (runFields.minutes) ? runFields.minutes: ""}
                    fields={ runFields }
                    setFields={ setRunFields }
                    placeholder="mm"
                    data-cy="minutes-field" />
                <Input
                    className="w-1/3 rounded-md text-center"
                    type="number"
                    name="seconds"
                    value={ (runFields.seconds) ? runFields.seconds: ""}
                    fields={ runFields }
                    setFields={ setRunFields }
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
                value={ (runFields.comment) ? runFields.comment: "" }
                fields={ runFields }
                setFields={ setRunFields }
                data-cy="comment-field" />
        </div>
    )
}