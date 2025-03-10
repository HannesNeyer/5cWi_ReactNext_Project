import React from 'react'
import { Car } from '@/lib/types/types'
import CarList from '../components/ui/car/carList'

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
        type: "Passat",
        color: "pink",
        motor: {
            serialNumber: 1234,
            hp: 200,
        }
    }
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}