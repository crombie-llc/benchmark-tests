import { Controller, Post, Body, UseGuards } from '@nestjs/common';
 import { AuthGuard } from '../guards/auth.guard';
 
@UseGuards(AuthGuard)
 @Controller('account')
 export class AccountController {
   @Post('transfer')