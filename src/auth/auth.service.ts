import { Injectable } from "@nestjs/common";
import { Register } from "./services/register/register";


@Injectable()
export class AuthService{
    constructor(private readonly register: Register){}
    async registerUser(email: string, password: string, role: string){
        return await this.register.registerService({email, password, role})
}
}