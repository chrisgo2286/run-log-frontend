import { createContext } from "react";
import { UserType } from "./miscTypes";

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
