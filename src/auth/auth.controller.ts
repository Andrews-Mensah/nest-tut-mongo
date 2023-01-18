import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    loginHandler(){

        return {msg: 'Google Auth Sucess'}
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    redirectURL(){

        return {msg: 'OKKKKKKKKKKKKK'}
    }

    @Get('status')
    user(@Req() request:Request){

        console.log(request.user)

        if(request.user){
            return {msg: 'Authenticated'}
        }
        else {
            return {msg: 'Not Authenticated'}
        }
    }
}
