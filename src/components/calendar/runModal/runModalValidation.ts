import { z } from "zod";
import { DataTypes } from "../calendarTypes";

const RunModalSchema = z.object({
    id: z
        .string()
        .optional(),
    date: z
        .string()
        .min(1, { message: "Please enter a Date!"}),
    run_type: z
        .string()
        .min(1, { message: "Please enter a Run Type!" }),
    distance: z
        .string()
        .min(1, { message: "Please enter a Distance!" }),
    time: z
        .string()
        .min(1, { message: "Please enter a Time!"})
})

export function validateRunModalFields (fields: DataTypes) {
    const result = RunModalSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}