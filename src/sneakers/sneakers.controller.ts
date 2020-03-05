import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { SneakersService } from "./sneakers.service";
import {Sneaker} from "./interface/sneaker.interface";
import {CreateSneakerDto} from "./dto/createSneaker.dto";

@Controller('sneakers')
export class SneakersController {
    constructor(private readonly sneakerService: SneakersService) {}

    @Get()
    index(): Promise<Sneaker[]> {
        return this.sneakerService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Sneaker> {
        return this.sneakerService.findById(id)
    }

    @Post('create')
    create(@Body() body: CreateSneakerDto): Promise<Sneaker> {
        return this.sneakerService.create(body)
    }

    @Put(':id/edit')
    update(@Param('id') id: string, @Body() body: CreateSneakerDto): Promise<Sneaker> {
        return this.sneakerService.update(id, body);
    }


    @Delete(':id/delete')
    delete(@Param('id') id: string) {
        return this.sneakerService.delete(id)
    }
}
