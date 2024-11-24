import { useState } from "react";
import Input from "../misc/input/input";
import TextArea from "../misc/textarea/textarea";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";

export default function NewTrainingBlock ({ 
    setTrainingUpdateReq
}: { setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
    const [ fields, setFields ] = useState<TrainingBlockTypes>({
        title: "",
        startDate: "",
        endDate: "",
        cycleLength: "",
        goals: ""
    })
    const [ startDateType, setStartDateType ] = useState<string>("text")
    const [ endDateType, setEndDateType ] = useState<string>("text")

    return (
        <div className="h-24 border border-gray-200">
            <div>Create Training Block</div>
            <div className="grid grid-cols-4 w-4/5 pl-5 mt-5">    
                <div>
                    <Input
                        className="w-44"
                        type="text"
                        name="title"
                        value={ fields.title }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="Title"
                        dataCy="title-input" />
                    <Input
                        className="w-44"
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
                <div>    
                    <Input
                        className="w-44"
                        type="number"
                        name="cycleLength"
                        value={ fields.cycleLength }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder="Cycle Length"
                        dataCy="cycle-length-input" />
                    <Input
                        className="w-44"
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
                    className="w-44"
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