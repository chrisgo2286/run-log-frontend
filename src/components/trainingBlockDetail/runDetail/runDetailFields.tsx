import Input from "../../misc/input/input"
import InputLabelPair from "../../misc/inputLabelPair/inputLabelPair"
import TextAreaLabelPair from "../../misc/textAreaLabelPair/textAreaLabelPair"
import SelectLabelPair from "../../misc/selectLabelPair/selectLabelPair"
import { RunTypes } from "../../../misc/hooks/trainingBlockHooks"

type RunFieldsProps = {
    fields: RunTypes,
    setFields: React.Dispatch<React.SetStateAction<RunTypes>>
}
export default function RunDetailFields ({
    fields,
    setFields
}: RunFieldsProps): JSX.Element {
    return (
        <div>
            <SelectLabelPair
                className="mt-5"
                name="type"
                initial="Easy Run"
                options={[ "Easy Run", "Long Run", "Intervals", "Tempo" ]}
                fields={ fields }
                setFields={ setFields }
                dataCy="run-type"
                label="Type" />
            <InputLabelPair
                className="mt-5"
                type="number"
                name="distance"
                value={ (fields.distance) ? fields.distance : "" }
                fields={ fields }
                setFields={ setFields }
                dataCy="run-distance" 
                label="Distance"/>
            <div className="grid grid-cols-6 h-8 w-60 mt-5">
                <span className="border border-gray-500 rounded-l-md col-span-2 text-center text-xs leading-8">
                    Time
                </span>
                <div className="flex w-40">
                    <Input
                        className="w-1/3 border-r border-r-gray-200 border-t border-b border-gray-500"
                        type="number"
                        name="hours"
                        value={ (fields.hours) ? fields.hours : "" }
                        fields={ fields }
                        setFields={ setFields }
                        dataCy="run-hours"
                        placeholder="hh" />
                    <Input
                        className="w-1/3 border-r border-r-gray-200 border-t border-b border-gray-500"
                        type="number"
                        name="minutes"
                        value={ (fields.minutes) ? fields.minutes : "" }
                        fields={ fields }
                        setFields={ setFields }
                        dataCy="run-minutes"
                        placeholder="mm" />
                    <Input
                        className="w-1/3 border-r border-t border-b border-gray-500 rounded-r-md"
                        type="number"
                        name="seconds"
                        value={ (fields.seconds) ? fields.seconds : "" }
                        fields={ fields }
                        setFields={ setFields }
                        dataCy="run-seconds"
                        placeholder="ss" />
                </div>

            </div>
            <TextAreaLabelPair
                className="mt-5"
                name="comments"
                value={ fields.comments }
                fields={ fields }
                setFields={ setFields }
                dataCy="run-comments"
                label="Comments" />
        </div>
    )
}