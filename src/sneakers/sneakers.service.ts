import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sneaker } from "./interface/sneaker.interface";
import {CreateSneakerDto} from "./dto/createSneaker.dto";

@Injectable()
export class SneakersService {
    constructor(
        @Inject('SNEAKER_MODEL')
        private readonly sneakerModel: Model<Sneaker>,
    ) {}

    async create(createSneakerDto: CreateSneakerDto): Promise<Sneaker> {
        const createdSneaker = new this.sneakerModel(createSneakerDto);
        return createdSneaker.save();
    }

    async findAll(): Promise<Sneaker[]> {
        return this.sneakerModel.find().exec();
    }
}
