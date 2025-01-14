import { z } from "zod";
import { TrainingBlockTypes } from "../../misc/hooks/trainingBlockHooks";

const TrainingBlockSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Please enter a title!" }),
    cycleLength: z
        .string()
        .min(1, { message: "Please enter the cycle length!"})
        .refine((value) => parseInt(value) <= 14 && parseInt(value) >= 3, {
            message: "Please choose a cycle length between 3 and 14!"
        }),
    startDate: z
        .string()
        .min(1, { message: "Please choose a start date!" }),
    endDate: z
        .string()
        .min(1, { message: "Please choose an end date!"}),
    goals: z
        .string()
        .optional()
}).refine((data) => data.startDate < data.endDate, 
    { message: "End date must come after start date!"}
)

export function validateUpdateTrainingBlock (
    fields: TrainingBlockTypes,
    trainingBlockId: string,
    trainingBlocks: TrainingBlockTypes[]
): string | string[] {
    const newFields = { ...fields, cycleLength: `${fields.cycleLength}` }
    const newTrainingBlocks = filterTrainingBlocks(trainingBlockId, trainingBlocks)
    return validateTrainingBlock(newFields, newTrainingBlocks)
}

function filterTrainingBlocks (
    trainingBlockId: string,
    trainingBlocks: TrainingBlockTypes[]
): TrainingBlockTypes[] {
    return trainingBlocks.filter((trainingBlock) => trainingBlock.id !== parseInt(trainingBlockId))
}


export function validateTrainingBlock (
    fields: TrainingBlockTypes,
    trainingBlocks: TrainingBlockTypes[]
): string | string[] {
    let errors: string[] = []
    const result = TrainingBlockSchema.safeParse(fields)
    if (!result.success) {
        const schemaErrors = result.error.issues.map((issue) => issue.message) 
        errors = errors.concat(schemaErrors)
    }
    if (fields.title && !isValidTitle(fields.title, trainingBlocks)) {
        errors.push("Title is a duplicate!")
    }
    if (fields.startDate && !isValidStartDate(fields.startDate, trainingBlocks)) {
        errors.push("Start Date overlaps with other training block!")
    }
    if (fields.endDate && !isValidEndDate(fields.endDate, trainingBlocks)) {
        errors.push("End Date overlaps with other training block!")
    }
    if (errors.length === 0) {
        return "Valid"
    } else {
        return errors
    }
}

function isValidTitle (
    title: string, 
    trainingBlocks: TrainingBlockTypes[]
): boolean {
    const titleFound = trainingBlocks.find((trainingBlock) => trainingBlock.title === title)
    return titleFound === undefined
}

function isValidStartDate (
    startDate: string,
    trainingBlocks: TrainingBlockTypes[]
): boolean {
    const startDateObj = new Date(startDate)
    for (let i=0; i < trainingBlocks.length; i++) {
        const start = new Date(trainingBlocks[i].startDate)
        const end = new Date(trainingBlocks[i].endDate)
        if (startDateObj >= start && startDateObj <= end) {
            return false
        }
    }
    return true
}

function isValidEndDate (
    endDate: string,
    trainingBlocks: TrainingBlockTypes[]
): boolean {
    const endDateObj = new Date(endDate)
    for (let i=0; i < trainingBlocks.length; i++) {
        const start = new Date(trainingBlocks[i].startDate)
        const end = new Date(trainingBlocks[i].endDate)
        if (endDateObj >= start && endDateObj <= end) {
            return false
        }
    }
    return true
}

