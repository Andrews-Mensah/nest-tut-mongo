import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './user.service';
import { Response, Request } from 'express';
import { user } from './interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor (
        private readonly usersService: UsersService,
        private jwtService: JwtService
    ){}

    @Get()
    dummy(){
        return 'Abeokuta'
    }

    @Post('register')
    async register(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ):Promise<user>{

        //  const data = {
        //     firstName,
        //     lastName,
        //     email,
        //     password
        // }

        // console.log(data)

        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);

        // console.log(hashedPassword)

        const newUser = await this.usersService.register({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        console.log("nnenenwnwn", newUser)

        delete newUser.password
        return newUser
    }

    
    @Post('login')
    async login(
        @Body ('email') email: string,
        @Body ('password') password: string,
        @Res({passthrough:true}) response:Response //passthrough true sends cookie to the frontend
    ){
        const emailExist = await this.usersService.findOneByEmail(email)

        if(!emailExist){
            throw new BadRequestException('Credentials are not valid')
        }

        const userPassword = await bcrypt.compare(password, emailExist.password)

        if(!userPassword){
            throw new BadRequestException('Credentials are not valid')
        }

        //expires in todo
        const jwt = await this.jwtService.signAsync(emailExist.id, {secret: process.env.JWT_SECRET})

        
        

       delete emailExist.password

        response.cookie('jwt', jwt, {httpOnly:true})
        return {
            user: emailExist,
            token: jwt
        }


    }

    @Get('signedInUser')
    async signedInUser(@Req() request:Request){
        try{
            const cookie = request.cookies['jwt']


        //returning the user

        const userId = await this.jwtService.verifyAsync(cookie, {secret:process.env.JWT_SECRET})

        if(!userId){
            throw new UnauthorizedException();
        }

        const user = await this.usersService.findOneById(userId)

        const {password, ...data} = user;
        return data;
        }
        catch(error){
            throw new UnauthorizedException();
        }

    }

    @Post('logout')
    async logout(@Res({passthrough:true}) response:Response){

        response.clearCookie('jwt')

        return {
            message: 'SUCCESS'
        }

    }
}
