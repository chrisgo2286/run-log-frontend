import { UserType } from "./miscTypes";

export function updateLocalStorage (token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}

export function updateUser (
    token: string, 
    username: string, 
    oldUser: UserType, 
    setUser: React.Dispatch<React.SetStateAction<UserType>>
): void {
    const newUser = {
        username: username,
        isLoggedIn: true,
        token: token,
    }
    setUser({ ...oldUser, ...newUser });
}

export function clearUser (
    user: UserType, 
    setUser: React.Dispatch<React.SetStateAction<UserType>>
): void {
    localStorage.clear();
    const newUser = {
        username: '',
        isLoggedIn: false,
        token: ''
    }
    setUser({ ...user, ...newUser });
}