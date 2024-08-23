import { IsEmail, IsIn } from "class-validator";
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column()
    role: string;

    @OneToMany(() => Order, order => order.user)
    orders: Order[]
}
