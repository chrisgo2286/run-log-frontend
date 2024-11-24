import { useState, useEffect } from "react"

export type TrainingBlockDataTypes = {
    cycles: string[],
    trainingData: TrainingBlockDayTypes[][]
}

export type TrainingBlockDayTypes = {
    date: string,
    day: string,
    id?: string,
    type?: string,
    distance?: string,
    hours?: string,
    minutes?: string,
    seconds?: string
}

export type TrainingBlockTypes = {
    id?: number,
    athlete?: string,
    title: string,
    startDate: string,
    endDate: string,
    cycleLength: string,
    goals?: string
}

type UseGetTrainingBlocksReturnTypes = {
    trainingBlocks: TrainingBlockTypes[], 
    setTrainingUpdateReq: React.Dispatch<React.SetStateAction<boolean>>
}

type UseGetTrainingBlockDataReturnTypes = {
    data: TrainingBlockDataTypes, 
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export function UseGetTrainingBlocks (): UseGetTrainingBlocksReturnTypes {
    const [ trainingBlocks, setTrainingBlocks ] = useState<TrainingBlockTypes[]>([])
    const [ trainingUpdateReq, setTrainingUpdateReq ] = useState<boolean>(false)
    useEffect(() => {
        setTrainingBlocks(trainingBlocksDummyData)
    },[trainingUpdateReq])

    return { trainingBlocks, setTrainingUpdateReq }
}

export function UseGetTrainingBlockData (
    trainingBlockId: number
): UseGetTrainingBlockDataReturnTypes {

    const [ data, setData ] = useState<TrainingBlockDataTypes>({
        cycles: [],
        trainingData: []
    })    
    const [ updateRequired, setUpdateRequired ] = useState<boolean>(false)

    useEffect(() => {
        if (trainingBlockId > 0) {
            setData(dummyData2)
            setUpdateRequired(false)
        }
    }, [trainingBlockId, updateRequired])
    
    return { data, setUpdateRequired }
}

const trainingBlocksDummyData: TrainingBlockTypes[] = [
    {
        id: 1,
        athlete: "Christian Go",
        title: "Fall Training Block - Short",
        startDate: "11/3/2024",
        endDate: "11/16/2024",
        cycleLength: "4",
        goals: (
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
            efficitur ante ac aliquam porttitor. Integer sodales orci sapien, 
            at gravida sem lobortis tincidunt. Curabitur gravida lorem fringilla
            lorem tristique semper. Etiam dui lorem, lobortis ut eros a, 
            blandit suscipit sapien. Nullam at ligula vitae ante cursus 
            imperdiet. Donec eu est volutpat, pretium sapien id, ornare magna.`
        )
    },
    {
        id: 2,
        athlete: "Christian Go",
        title: "Fall Training Block - Long",
        startDate: "11/3/2024",
        endDate: "11/30/2024",
        cycleLength: "7",
        goals: (
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
            efficitur ante ac aliquam porttitor. Integer sodales orci sapien, 
            at gravida sem lobortis tincidunt.`
        )
    }
]
const dummyData1 = {
    cycles: [
        "11/3/2024 - 11/6/2024",
        "11/7/2024 - 11/10/2024",
        "11/11/2024 - 11/14/2024",
        "11/15/2024 - 11/16/2024"
    ],
    trainingData: [
        [
            { 
                date: "11/3", 
                day: "SU", 
                id: "1", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/4", 
                day: "M", 
                id: "2", 
                type: "Easy Run", 
                distance: "5", 
                minutes: "27", 
                seconds: "25"
            },    
            { 
                date: "11/5", 
                day: "TU", 
                id: "3", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/6", 
                day: "W", 
                id: "4", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            }
        ],
        [
            { 
                date: "11/7", 
                day: "TH", 
                id: "5", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/8", 
                day: "F", 
                id: "6", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/9", 
                day: "SA", 
            },
            { 
                date: "11/10", 
                day: "SU", 
            }
        ],
        [
            { 
                date: "11/11", 
                day: "M", 
            },
            { 
                date: "11/12", 
                day: "T", 
            },
            { 
                date: "11/13", 
                day: "W", 
            },
            { 
                date: "11/14", 
                day: "TH", 
            }
        ],
        [
            { 
                date: "11/15", 
                day: "F", 
            },
            { 
                date: "11/16", 
                day: "SA", 
            }
        ]
    ]
}

const dummyData2 = {
    cycles: [
        "11/3/2024 - 11/9/2024",
        "11/10/2024 - 11/16/2024",
        "11/17/2024 - 11/23/2024",
        "11/24/2024 - 11/30/2024"
    ],
    trainingData: [
        [
            { 
                date: "11/3", 
                day: "SU", 
                id: "1", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/4", 
                day: "M", 
                id: "2", 
                type: "Easy Run", 
                distance: "5", 
                minutes: "27", 
                seconds: "25"
            },    
            { 
                date: "11/5", 
                day: "TU", 
                id: "3", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/6", 
                day: "W", 
                id: "4", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/7", 
                day: "TH", 
                id: "5", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/8", 
                day: "F", 
                id: "6", 
                type: "Easy Run", 
                distance: "10", 
                minutes: "58", 
                seconds: "20"
            },
            { 
                date: "11/9", 
                day: "SA", 
            },
        ],
        [
            { 
                date: "11/10", 
                day: "SU", 
            },
            { 
                date: "11/11", 
                day: "M", 
            },
            { 
                date: "11/12", 
                day: "T", 
            },
            { 
                date: "11/13", 
                day: "W", 
            },
            { 
                date: "11/14", 
                day: "TH", 
            },
            { 
                date: "11/15", 
                day: "F", 
            },
            { 
                date: "11/16", 
                day: "SA", 
            }
        ],
        [
            { 
                date: "11/17", 
                day: "F", 
            },
            { 
                date: "11/18", 
                day: "SA", 
            },
            { 
                date: "11/19", 
                day: "F", 
            },
            { 
                date: "11/20", 
                day: "SA", 
            },
            { 
                date: "11/21", 
                day: "F", 
            },
            { 
                date: "11/22", 
                day: "SA", 
            },
            { 
                date: "11/23", 
                day: "F", 
            }
        ],
        [
            { 
                date: "11/24", 
                day: "SA", 
            },
            { 
                date: "11/25", 
                day: "F", 
            },
            { 
                date: "11/26", 
                day: "SA", 
            },
            { 
                date: "11/27", 
                day: "SA", 
            },
            { 
                date: "11/28", 
                day: "F", 
            },
            { 
                date: "11/29", 
                day: "SA", 
            },
            {
                date: "11/30",
                day: "SU"
            }
        ]
    ]
}