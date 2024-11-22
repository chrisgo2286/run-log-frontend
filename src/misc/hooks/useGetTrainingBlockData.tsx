import { useState, useEffect } from "react"
import TrainingBlockBody from "../../components/trainingBlock/trainingBlock/trainingBlockBody"

export type TrainingBlockDataTypes = {
    cycles: string[],
    trainingData: TrainingBlockItemTypes[][]
}

export type TrainingBlockItemTypes = {
    date: string,
    day: string,
    id?: string,
    type?: string,
    distance?: string,
    hours?: string,
    minutes?: string,
    seconds?: string
}

export function UseGetTrainingBlockData (
    trainingBlockId: number
): { data: TrainingBlockDataTypes, setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>> } {

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
    }, [updateRequired])
    
    return { data, setUpdateRequired }
}

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