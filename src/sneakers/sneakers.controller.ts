import {Controller, Delete, Get, Param} from '@nestjs/common';
import { SneakersService } from "./sneakers.service";
import {Sneaker} from "./interface/sneaker.interface";

@Controller('sneakers')
export class SneakersController {
    constructor(private readonly sneakerService: SneakersService) {}

    @Get()
    index(): Promise<Sneaker[]> {
        return this.sneakerService.findAll()
    }

    @Delete(':id/delete')
    delete(@Param('id') id: string) {
        return this.sneakerService.delete(id)
    }
}
