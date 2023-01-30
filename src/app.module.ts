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
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UsersService } from './user/user.service';
import { UserSchema } from './user/schemas/Users.schema';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [UserModule,ItemsModule, AuthModule, MongooseModule.forRoot(config.dbUri), PassportModule.register({session:true}), MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    privateKey:'yyuuyyyyhhhdhhhdd',
    // signOptions:{
    //   expiresIn: process.env.EXPIRES
    // }
  })],
  // controllers: [AppController, ItemsController],
  // providers: [AppService, ItemsService],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}
