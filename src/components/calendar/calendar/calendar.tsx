import { useContext } from "react"
import CalendarBody from "./calendarBody"
import CalendarHeader from "./calendarHeader"
import { CurrentWindowContext } from "../../../misc/context"

type CalendarProp = {
    handleCloseModal: () => void
}

export default function Calendar ({ 
    handleCloseModal 
}: CalendarProp): JSX.Element {    

    const { currentWindow } = useContext(CurrentWindowContext)

    return (
        <main onClick={ handleCloseModal } className={ (currentWindow !== "calendar") ? "h-screen relative blur-sm": "h-screen relative"}>
            <div className="w-4/5 mx-auto mb-10 border border-solid border-gray-200 rounded-xl">
                <CalendarHeader />
                <CalendarBody />
            </div>
        </main>
    )
}