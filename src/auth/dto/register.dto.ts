import { Inject, Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@Injectable()
export class RegisterDto{
 @IsString()
 @IsNotEmpty()
 @IsEmail()
 email: string;

 @IsString()
 @IsNotEmpty()
 password: string;

 @IsString()
 @IsNotEmpty()
 role: string;
}
