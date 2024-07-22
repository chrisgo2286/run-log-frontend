import { createContext } from "react";
import { UserType } from "./miscTypes";

export const UserContext = createContext({
    user: {
        username: "",
        isLoggedIn: false,
        token: ""
    },
    setUser: (user: UserType) => {}
});
