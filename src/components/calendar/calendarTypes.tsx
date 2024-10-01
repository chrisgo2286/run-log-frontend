export type DataTypes = {
    runData: RunDataTypes[],
    weeklyTotals: string[]
}

export type RunDataTypes = {
    id?: string,
    run_type?: string,
    date?: string,
    day?: string,
    distance?: string,
    hours?: string,
    minutes?: string,
    seconds?: string,
    comment?: string
}

export type RunDataObjectType = {
    data: RunDataTypes
}

export type PeriodTypes = {
    month: number,
    year: number
}