import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersSchema } from './schemas/User.schema';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { SessionSerializer } from './utils/Serializer';

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UsersSchema}])],
    controllers:[AuthController],
    providers:[AuthService, GoogleStrategy, SessionSerializer]
})
export class AuthModule {}
