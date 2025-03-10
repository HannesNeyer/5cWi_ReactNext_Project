import React from 'react'
import Card from "../components/ui/car/card"
import { Car } from '@/lib/types/types'

type Props = {}

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW X3",
        color: "red",
        motor: {
            serialNumber: 1234,
            hp: 200,
        }
    },

    {
        name: "Mega Car",
        type: "Fiat 500",
        color: "blue",
        motor: {
            serialNumber: 1234,
            hp: 200,
        }
    },

    {
        name: "Ultra car",
        type: "passat",
        color: "pink",
        motor: {
            serialNumber: 1234,
            hp: 200,
        }
    }
]


export default function Cars({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            {cars.map((car : Car) => (<Card car={car}/>))}
        </div>
    )
}