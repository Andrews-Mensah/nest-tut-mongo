import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/Users.schema';
import { UserController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}]), JwtModule.register({
    secret: process.env.JWT_SECRET,
    privateKey:'yyuuyyyyhhhdhhhdd',
    // signOptions:{
    //   expiresIn: process.env.EXPIRES
    // }
  })],
  controllers: [UserController],
  providers: [UsersService]
})
export class UserModule {}
