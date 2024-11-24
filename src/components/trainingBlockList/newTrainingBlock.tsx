import { useState } from "react";
import Input from "../misc/input/input";
import TextArea from "../misc/textarea/textarea";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";
import Button from "../misc/button/button";

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

    function handleSubmit () {
        console.log("TrainingBlockSubmitted!")
    } 

    return (
        <div className="border border-gray-200 rounded-md py-5">
            <div className="pl-5">Add Training Block</div>
            <div className="grid grid-cols-5 pl-5 mt-5 gap-5">    
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
                <div className="col-span-1 flex items-center">
                    <Button
                        className="h-8 max-w-30 bg-green-100"
                        onClick={ handleSubmit }
                        dataCy="submit-btn">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

const baseInputClass = "w-full mb-2 rounded-md h-8 pl-2 border border-gray-400"