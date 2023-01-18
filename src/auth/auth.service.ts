import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/Users.interface';

@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>){}

    async validateUser(details: User){

        console.log('AuthService')
        console.log("Details", details)

        const user = await this.userModel.findOne({
            email: details.email
        })

        console.log('USER', user)
        if(user){
            return user;
        }

        const newUser = await this.userModel.create(details);

        return newUser;
        

    }


    async findUser(id: string){
        const user = await this.userModel.findById(id)

        return user;
    }
}
