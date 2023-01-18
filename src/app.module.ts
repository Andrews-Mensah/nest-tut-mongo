import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import config from './config/keys';
import { UsersSchema } from './auth/schemas/User.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ItemsModule, AuthModule, MongooseModule.forRoot(config.dbUri), PassportModule.register({session:true})],
  // controllers: [AppController, ItemsController],
  // providers: [AppService, ItemsService],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
