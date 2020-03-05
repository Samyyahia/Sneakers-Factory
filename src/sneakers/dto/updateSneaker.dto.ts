import {IsNotEmpty, IsDate, IsNumber, IsString} from "class-validator";

export class UpdateSneakerDto {
    @IsNotEmpty() @IsString() name: string;
    @IsNotEmpty() @IsNumber() price: number;
    @IsNotEmpty() @IsString() brand: string;
    @IsNotEmpty() @IsDate() date: Date;
}
