import { IsNotEmpty, IsDate } from "class-validator";

export class CreateSneakerDto {
    @IsNotEmpty() name: string;
    @IsNotEmpty() price: number;
    @IsNotEmpty() brand: string;
    @IsNotEmpty() @IsDate() date: Date;
}
