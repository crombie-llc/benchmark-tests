import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
 
const execAsync = promisify(exec);

 @Injectable()
 export class ExportService {
   async exportData(format: string): Promise<Buffer> {
    const { stdout } = await execAsync(`convert data.txt output.${format}`);
     return Buffer.from(stdout);
   }
 }