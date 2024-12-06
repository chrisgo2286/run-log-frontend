import { createContext } from "react";
import { UserType } from "./miscTypes";
import { DataTypes, PeriodTypes, RunDataTypes } from "../components/calendar/calendarTypes";
import { blankRunFields } from "../components/calendar/calendarPage";
import { CurrentWindowTypes } from "../components/calendar/calendarPage";
import { TrainingBlockDataTypes, TrainingBlockTypes } from "./hooks/trainingBlockHooks";

export type UserContextType = {
    user: UserType,
    setUser: React.Dispatch<React.SetStateAction<UserType>>
}

export const UserContext = createContext<UserContextType>({
    user: {
        username: "",
        isLoggedIn: false,
        token: ""
    },
    setUser: () => console.log("Oops, default value used!")
});

type RunErrorsContextType = {
    runErrors: string[],
    setRunErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export const RunErrorsContext = createContext<RunErrorsContextType>({
    runErrors: [],
    setRunErrors: () => console.log("Oops, default value used!")
})

type DataContextType = {
    data: DataTypes,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export const DataContext = createContext<DataContextType>({
    data: {
        runData: [],
        weeklyTotals: []
    },
    setUpdateRequired: () => console.log("Ooops, default value used!")
})

type PeriodContextType = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}

export const PeriodContext = createContext<PeriodContextType>({
    period: { month: 1, year: 2024 },
    setPeriod: () => console.log("Ooops, default value used!")
})

type RunFieldsContextType = {
    runFields: RunDataTypes,
    setRunFields: React.Dispatch<React.SetStateAction<RunDataTypes>>
}

export const RunFieldsContext = createContext<RunFieldsContextType>({
    runFields: blankRunFields,
    setRunFields: () => console.log("Ooops, default value used!")
})

type CurrentWindowContextType = {
    currentWindow: CurrentWindowTypes
    setCurrentWindow: React.Dispatch<React.SetStateAction<CurrentWindowTypes>>
}

export const CurrentWindowContext = createContext<CurrentWindowContextType>({
    currentWindow: "calendar",
    setCurrentWindow: () => console.log("Ooops, default value used!")
})

type TrainingBlockDataContextType = {
    data: TrainingBlockDataTypes,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>    
}

export const TrainingBlockDataContext = createContext<TrainingBlockDataContextType>({
    data: {
        trainingData: []
    },
    setUpdateRequired: () => console.log("Ooops, default value used!")
})

export const TrainingBlockContext = createContext<TrainingBlockTypes>({
    title: "",
    startDate: "",
    endDate: "",
    cycleLength: "",
    goals: ""
})