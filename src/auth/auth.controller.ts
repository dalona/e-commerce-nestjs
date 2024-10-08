import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";


@Controller('auth')
export class AuthController{
 constructor(private readonly authService: AuthService){}
 

 @Post('register')
 
 registerAccount(@Body (){email, password, role}:RegisterDto){
    return this.authService.registerUser(email,password,role)
 
}
}