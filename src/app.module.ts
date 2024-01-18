import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CarsModule } from './modules/cars/cars.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { RentCarsModule } from './modules/rent-cars/rent-cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { typeormConfig } from './common/config/typeorm.config';
import  sampleConfig  from './common/config/sample.config';
@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig, sampleConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeormConfig>) => config,
    }),
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
