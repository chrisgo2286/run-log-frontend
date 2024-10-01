import { useContext } from "react";
import Button from "../../misc/button/button";
import { CurrentWindowContext } from "../../../misc/context";

type DeleteModalProp = {
    handleDeleteRun: () => void
}

export default function DeleteModal ({ 
    handleDeleteRun
}: DeleteModalProp): JSX.Element {
    
    const { currentWindow, setCurrentWindow } = useContext(CurrentWindowContext)

    function handleClassName (): string {
        return (currentWindow === "deleteRunModal") ? classNameVisible: classNameInvisible; 
    }

    function handleBack (): void {
        setCurrentWindow("runModal")
    }
    
    return (
        <div className={ handleClassName() }>
            <div className="text-xl m-10">Are you sure you want to delete this run?</div>
            <div className="flex flex-row mb-10">
                <Button 
                    className="button w-16 h-8 ml-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
                    onClick={ handleDeleteRun }>
                    Yes
                </Button>
                <Button 
                    className="button w-16 h-8 ml-2 border border-gray-500 rounded-md bg-green-200 hover:bg-green-300"
                    onClick={ handleBack }>
                    Back
                </Button>
            </div>
        </div>
    )
}

const classNameVisible = "absolute flex flex-col justify-center items-center inset-1/3 w-1/3 h-1/3 border border-solid border-gray-200 bg-white rounded-md shadow-md"
const classNameInvisible = "hidden"