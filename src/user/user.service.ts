import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly usersModel:Model<user>){}

    async register(user:user):Promise<user>{
        const newUser =  new this.usersModel(user)

        console.log("New User", newUser.email);
        console.log("First", newUser.firstName)

        // const emailexists = await this.usersModel.findOne({
        //     where: {email: newUser.email}
        // })

        // if(emailexists){
        //     throw new BadRequestException('Email already taken')
        // }
        const savedUser = await newUser.save()

        return savedUser
    }

    async findOneByEmail(userEmail:string):Promise<user>{

        try{
            // return this.usersModel.findOne({
        //     where: {email: userEmail},
        // });

        const me = this.usersModel.findOne({where:{email: userEmail}})

        console.log("MEEEE", me)
        return me;

        }

        catch(error){
            console.log("ERROR", error)
            return error;
        }

        
    }

    async findOneById(userId:string):Promise<user>{

        return this.usersModel.findOne({
            where: {id:userId},
        });

    }
}
