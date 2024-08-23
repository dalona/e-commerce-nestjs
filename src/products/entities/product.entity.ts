import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

}
