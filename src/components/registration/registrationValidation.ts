import { z } from "zod";
import { RegistrationProps } from "./registrationTypes";

const RegistrationSchema = z.object({
    username: z
        .string()
        .min(1, { message: "Please enter a Username" }),
    password1: z
        .string()
        .min(1, { message: "Please enter a Password!"}),
    password2: z
        .string()
        .min(1, { message: "Please renter your Password!"})
})

export function validateRegistrationFields (credentials: RegistrationProps) {
    const result = RegistrationSchema.safeParse(credentials)
    if (result.success) {
        return "Valid"
    } else {
        return result.error.issues.map((issue) => issue.message)
    }
}