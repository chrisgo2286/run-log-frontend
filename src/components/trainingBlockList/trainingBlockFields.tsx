import { useState } from "react"
import Input from "../misc/input/input"
import TextArea from "../misc/textarea/textarea"
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"

type TrainingBlockFieldsPropsTypes = {
    fields: TrainingBlockTypes,
    setFields: React.Dispatch<React.SetStateAction<TrainingBlockTypes>>
}
export default function TrainingBlockFields ({ 
    fields,
    setFields 
}: TrainingBlockFieldsPropsTypes): JSX.Element {

    const baseInputClass = "w-full mb-2 rounded-md h-8 pl-2 border border-gray-400"
    const [ startDateType, setStartDateType ] = useState<string>("text")
    const [ endDateType, setEndDateType ] = useState<string>("text")

    return (
        <div className="rounded-md py-5">
            <div className="grid grid-cols-4 px-5 mt-5 gap-5">    
                <div className="col-span-1">
                    <Input
                        className={ baseInputClass }
                        type="text"
                        name="title"
                        value={ fields.title }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="Title"
                        dataCy="title-input" />
                    <Input
                        className={ baseInputClass }
                        type={ startDateType }
                        name="startDate"
                        value={ fields.startDate }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="Start Date"
                        dataCy="start-date-input" 
                        onFocus={() => setStartDateType("date")}
                        onBlur={() => setStartDateType("text")}/>
                </div>
                <div className="col-span-1">    
                    <Input
                        className={ baseInputClass }
                        type="number"
                        name="cycleLength"
                        value={ fields.cycleLength }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="Cycle Length"
                        dataCy="cycle-length-input" />
                    <Input
                        className={ baseInputClass }
                        type={ endDateType }
                        name="endDate"
                        value={ fields.endDate }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="End Date"
                        dataCy="end-date-input" 
                        onFocus={() => setEndDateType("date")}
                        onBlur={() => setEndDateType("text")}/>

                </div>
                <TextArea
                    className="h-17 border border-gray-400 rounded-md pl-2 row-span-2 col-span-2"
                    name="goals"
                    value={ fields.goals }
                    fields={ fields }
                    setFields={ setFields }
                    placeholder="Goals"
                    dataCy="goals=textarea" />
            </div>

        </div>
        
    )    
}