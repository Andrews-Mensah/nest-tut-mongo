import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly authService: AuthService
    ){
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:4000/auth/google/redirect',
            scope: ["profile", "email"]
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile){

        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
       const user = await this.authService.validateUser({
            displayName: profile.displayName,
            email: profile.emails[0].value
        })

        console.log('Validate')
        console.log(user)
        return user;
    }

}