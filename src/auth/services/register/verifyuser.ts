import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "src/auth/dto/register.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";


interface IVerifyUser{
    verifyService(email: string): Promise<User | null>
}

@Injectable()
export class VerifyUser implements IVerifyUser{
    //para consultar la base de datos necesitamos el constructor para inyectar el repositorio
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    async verifyService(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({where : {email}})
        return user//buscamos el usuario por el email
    }
}
