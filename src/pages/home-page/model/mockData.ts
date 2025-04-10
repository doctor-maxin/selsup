import type { Model } from "@/entities/models/Model"
import type { Param } from "@/shared/lib/utility-types/params"

export const mockParmas: Param[] = [
    {
        "id": 1,
        "name": "Назначение",
        type: 'string'
    },
    {
        "id": 2,
        "name": "Длина",
        type: 'string'
    },
    {
        id: 3,
        name: 'Цена',
        type: 'string'
    }
]


export const mockModel: Model = {
    "paramValues": [
        {
            "paramId": 1,
            "value": "повседневное"
        },
        {
            "paramId": 2,
            "value": "макси"
        },
    ],
    colors: ['red']
}