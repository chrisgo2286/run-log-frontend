import { z } from "zod";
import { RunDataTypes } from "../calendarTypes";

const RunModalSchema = z.object({
    date: z
        .string()
        .min(1, { message: "Please enter a Date!" }),
    run_type: z
        .string()
        .min(1, { message: "Please enter a Run Type!" }),
    distance: z
        .string()
        .min(1, { message: "Please enter a Distance!" }),
    hours: z.string(),
    minutes: z.string(),
    seconds: z.string(),
    comment: z.string()
})

export function validateRunModalFields (fields: RunDataTypes) {
    const result = RunModalSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}