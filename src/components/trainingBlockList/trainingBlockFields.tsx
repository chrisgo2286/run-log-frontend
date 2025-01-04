import { useState } from "react"
import InputLabelPair from "../misc/inputLabelPair/inputLabelPair"
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks"
import TextAreaLabelPair from "../misc/textAreaLabelPair/textAreaLabelPair"

type TrainingBlockFieldsPropsTypes = {
    fields: TrainingBlockTypes,
    setFields: React.Dispatch<React.SetStateAction<TrainingBlockTypes>>
}
export default function TrainingBlockFields ({ 
    fields,
    setFields 
}: TrainingBlockFieldsPropsTypes): JSX.Element {

    const baseInputClass = "mb-2"
    const [ startDateType, setStartDateType ] = useState<string>("text")
    const [ endDateType, setEndDateType ] = useState<string>("text")

    return (
        <div className="rounded-md pb-5">
            <div className="flex flex-row flex-wrap justify-center items-center px-5 mt-5 gap-2">    
                <InputLabelPair
                    className={ baseInputClass }
                    type="text"
                    name="title"
                    value={ fields.title }
                    fields={ fields }
                    setFields={ setFields }
                    dataCy="title-input" 
                    label="Title" />
                <InputLabelPair
                    className={ baseInputClass }
                    type="number"
                    name="cycleLength"
                    value={ fields.cycleLength }
                    fields={ fields }
                    setFields={ setFields }
                    dataCy="cycle-length-input" 
                    label="Cycle Length"/>
                <InputLabelPair
                    className={ baseInputClass }
                    type={ startDateType }
                    name="startDate"
                    value={ fields.startDate }
                    fields={ fields }
                    setFields={ setFields }
                    dataCy="start-date-input" 
                    onFocus={() => setStartDateType("date")}
                    onBlur={() => setStartDateType("text")}
                    label="Start Date" />  
                <InputLabelPair
                    className={ baseInputClass }
                    type={ endDateType }
                    name="endDate"
                    value={ fields.endDate }
                    fields={ fields }
                    setFields={ setFields }
                    dataCy="end-date-input" 
                    onFocus={() => setEndDateType("date")}
                    onBlur={() => setEndDateType("text")}
                    label="End Date" />
                <TextAreaLabelPair
                    className="h-17 border border-gray-400 rounded-md row-span-2 col-span-2"
                    name="goals"
                    value={ fields.goals }
                    fields={ fields }
                    setFields={ setFields }
                    dataCy="goals-textarea" 
                    label="Goals" />
            </div>
        </div>
        
    )    
}