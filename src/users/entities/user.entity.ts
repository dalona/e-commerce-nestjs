import { IsEmail, IsIn, isIn } from "class-validator";
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    @IsEmail({}, { message : "It has to be a valid email address"})
    email: string;

    @Column()
    password: string;
    
    @Column({default : "user"})
    @IsIn(["user","admin"],{message: "The role must be 'user' or 'admin'"})
    role: string;

    @OneToMany(() => Order, order => order.userId)
    orders: Order[]
}
