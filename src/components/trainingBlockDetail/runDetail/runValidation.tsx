import { z } from "zod";
import { RunTypes } from "../../../misc/hooks/trainingBlockHooks";

const RunSchema = z.object({
    id: z
        .number()
        .optional()
        .or(z.string()),
    date: z
        .string()
        .regex(/\d\d\d\d-\d\d-\d\d/, { message: "Please enter a valid date!"}),
    run_type: z
        .string()
        .min(1, { message: "Please enter a run type!" }),
    distance: z
        .string()
        .min(1, { message: "Please enter a distance!"})
        .or(z.number()),
    hours: z
        .string()
        .optional()
        .or(z.number()),
    minutes: z
        .string()
        .optional()
        .or(z.number().optional()),
    seconds: z
        .string()
        .optional()
        .or(z.number()),
    comments: z
        .string()
        .optional(),
}).refine((data) => data.hours !== "" || data.minutes !== "" || data.seconds !== "", 
    { message: "Please enter a time!"})

export function validateRun (
    fields: RunTypes,
): string | string[] {
    const result = RunSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    } else {
        return result.error.issues.map((issue) => issue.message)
    }
    
}
