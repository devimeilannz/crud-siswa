import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateSiswaDto {
         @IsNotEmpty()
         @IsNumber()
         @Type(()=>Number)
         @Min(2)
         nisn: number;

         @IsNotEmpty()
         @IsString()
         nama: string;

         @IsNotEmpty()
         @IsNumber()
         @Type(()=>Number)
         @Min(1)
         age: number;

         @IsNotEmpty()
         @IsString()
         address: string;

}