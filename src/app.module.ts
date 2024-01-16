import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CarsModule } from './modules/cars/cars.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { RentCarsModule } from './modules/rent-cars/rent-cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule,CarsModule,EmployeesModule,RentCarsModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      url:"postgres://postgres:root@db:5432/nest",
      entities: [__dirname + './*.entity.{js,ts}'],
      subscribers: [__dirname + './*.subscriber.{js,ts}'],
      synchronize: true,
      autoLoadEntities:true,
      logging:true,
      logger:'file',
    })
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
