import { Body, Controller, Get, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('register')
    register(
        @Body(ValidationPipe) registerDto: RegisterDto
    ) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(
        @Body(ValidationPipe) loginDto: LoginDto
    ) {
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request()
        req: any
    ) {
        return req.user;
    }
}
