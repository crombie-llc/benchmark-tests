import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
 
 @Injectable()
 export class AuthService {
   async hashPassword(password: string): Promise<string> {
    return crypto.createHash('md5').update(password).digest('hex');
   }
 }