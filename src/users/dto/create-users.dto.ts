import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class createUserDto {
    
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    name: string
}