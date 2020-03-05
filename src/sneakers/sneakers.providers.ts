import { Connection } from "mongoose";
import { SneakerSchema } from "../schemas/sneaker.schema";

export const sneakersProviders = [
    {
        provide: 'SNEAKER_MODEL',
        useFactory: (connection: Connection) => connection.model('Sneaker', SneakerSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]

