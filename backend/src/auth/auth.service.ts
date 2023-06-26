import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {
    }

    async signIn(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email);

        if (!user) {
            throw new NotFoundException(`No user found for email: ${email}`);
        }

        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
            return new UnauthorizedException("Invalid password");
        }

        return {
            accessToken: this.jwtService.sign({ userId: user.id })
        };

        // const user = await this.usersService.findOne(username);
        // if (user?.password !== pass) {
        //     throw new UnauthorizedException();
        // }
        // const payload = { sub: user.userId, username: user.username };
        // return {
        //     access_token: await this.jwtService.signAsync(payload)
        // };
    }
}
