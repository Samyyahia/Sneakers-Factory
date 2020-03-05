import {Model} from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sneaker } from "./interface/sneaker.interface";
import {CreateSneakerDto} from "./dto/createSneaker.dto";
import {UpdateSneakerDto} from "./dto/updateSneaker.dto";

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

    async update(id: string, updateSneakerDto: UpdateSneakerDto): Promise<Sneaker> {
        return this.sneakerModel.update({_id: id}, updateSneakerDto);
    }

    async findAll(): Promise<Sneaker[]> {
        return this.sneakerModel.find().exec();
    }

    async findById(id: string): Promise<Sneaker> {
        return this.sneakerModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.sneakerModel.deleteOne({_id: id})
    }
}
