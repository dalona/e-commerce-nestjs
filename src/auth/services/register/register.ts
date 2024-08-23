import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "src/auth/dto/register.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { VerifyUser } from "./verifyuser";
import { Encrypt } from "./encrypt";

interface IRegister{
    registerService({email , password, role}: RegisterDto) : Promise<User>;

}
@Injectable()
export class Register implements IRegister{
    constructor(@InjectRepository(User) private readonly userRepository: Repository <User>, private readonly verifyService:VerifyUser, private readonly encryptService: Encrypt) { }

    async registerService({email, password, role}: RegisterDto): Promise<User> {
        
        const encryptedPss = await this.encryptService.encryptService(password)
        
        const userExist = await this.verifyService.verifyService(email)
        if(userExist) throw new Error("User already exist")
        const user = this.userRepository.create({email, password:encryptedPss, role})
        return await this.userRepository.save(user)
    }
}