import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'bwiaemcsx0okmcvgcgkd-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'uxrwx4yfme6jqntx',
    password: 'VyAy5mHkDcwfHwmAymeI',
    database: 'bwiaemcsx0okmcvgcgkd',
    entities: [User,Product,Order],
    synchronize: true,
  })
  ,UsersModule, ProductsModule, OrdersModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
