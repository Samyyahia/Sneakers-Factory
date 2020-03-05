import { Schema } from 'mongoose'

export const SneakerSchema = new Schema({
    id: String,
    name: String,
    brand: String,
    price: Number,
    data: Date,
})
