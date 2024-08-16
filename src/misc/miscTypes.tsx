export type UserType = {
    username: string;
    isLoggedIn: boolean;
    token: string;
}

export type ResponseType = {
    status: number,
    token: string
}