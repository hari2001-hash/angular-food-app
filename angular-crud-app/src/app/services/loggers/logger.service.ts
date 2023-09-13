import { Injectable } from '@angular/core';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from "ngx-logger";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(private logger:NGXLogger) {

  }
 log(message:any){
   this.logger.info(message);

 }

 error(){

 }
}
