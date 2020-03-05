import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakersController } from './sneakers/sneakers.controller';
import { SneakersService } from './sneakers/sneakers.service';
import {DatabaseModule} from "./database.module";
import {sneakersProviders} from "./sneakers/sneakers.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, SneakersController],
  providers: [AppService, SneakersService, ...sneakersProviders],
})
export class AppModule {}
