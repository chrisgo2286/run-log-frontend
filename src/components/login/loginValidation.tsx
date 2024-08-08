import { z } from "zod";
import { FieldsType } from "./loginTypes";

const LoginSchema = z.object({
    username: z.string().min(3),
    password: z.string()
})

export function validateLoginFields (credentials: FieldsType) {
    const result = LoginSchema.safeParse(credentials)
    if (result.success) {
        return "Valid"
    } else {
        return result.error.issues.map((issue) => issue.message)
    }
}