import {IsNotEmpty, IsDate, IsString, IsNumber} from "class-validator";

export class CreateSneakerDto {
    @IsNotEmpty() @IsString() name: string;
    @IsNotEmpty() @IsNumber() price: number;
    @IsNotEmpty() @IsString() brand: string;
    @IsNotEmpty() @IsDate() date: Date;
}
