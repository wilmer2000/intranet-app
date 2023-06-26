import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("login")
    @HttpCode(HttpStatus.OK)
    signIn(@Body() { email, password }: LoginDto) {
        return this.authService.signIn(email, password);
    }
}
