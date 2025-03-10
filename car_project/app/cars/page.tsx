import React from 'react'
import Card from "../components/ui/car/card"
import { Car } from '@/lib/types/types'

type Props = {}

const car:Car = {
    name: "Super Car",
    type: "BMW X3",
    color: "red",
    motor: {
        serialNumber: 1234,
        hp: 200,
    }
}

export default function Cars({ }: Props) {
    return (
        <div>
            <h1>Cars</h1>
            <Card car={car} />
            <Card car={car} />
            <Card car={car} />
        </div>
    )
}