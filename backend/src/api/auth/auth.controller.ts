import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register() {
    return this.authService.register();
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto:{authId: string}){
    return this.authService.login(dto)
  }

} 