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
            <div className="max-w-screen-lg mx-auto my-10 px-10 rounded-xl">
                <CalendarHeader />
                <CalendarBody />
            </div>
        </main>
    )
}