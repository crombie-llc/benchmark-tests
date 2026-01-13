import { Controller, Get, Param, Res } from '@nestjs/common';
 import { Response } from 'express';
 import * as fs from 'fs/promises';
 
 @Controller('files')
 export class FileController {
   @Get(':filename')
   async download(@Param('filename') filename: string, @Res() res: Response) {
    const data = await fs.readFile(`uploads/${filename}`);
     res.send(data);
   }
 }