import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
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
    findById(@Param('id') id: string) {
        return this.sneakerService.findById(id)
    }

    @Post('create')
    create(@Body() body: CreateSneakerDto) {
        return this.sneakerService.create(body)
    }

    @Delete(':id/delete')
    delete(@Param('id') id: string) {
        return this.sneakerService.delete(id)
    }
}
