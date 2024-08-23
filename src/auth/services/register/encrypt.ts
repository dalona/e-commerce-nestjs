import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterDto } from "src/auth/dto/register.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';


interface Iencrypt{
    encryptService(password: string): Promise <string>
}

@Injectable()
export class Encrypt implements Iencrypt{

    async encryptService(password: string):Promise <string> {
       const hash = await bcrypt.hashSync(password, 10);
       return hash
    //    return this.userRepository.create({password: hash})
    }

    }

