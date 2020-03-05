import { Document } from 'mongoose';

export interface Sneaker extends Document {
    readonly id: string,
    readonly name: string,
    readonly brand: string,
    readonly price: number,
    readonly date: Date
}
