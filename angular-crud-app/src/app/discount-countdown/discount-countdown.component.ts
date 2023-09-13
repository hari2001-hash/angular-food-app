import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-discount-countdown',
  templateUrl: './discount-countdown.component.html',
  styleUrls: ['./discount-countdown.component.scss']
})
export class DiscountCountdownComponent implements OnInit{
  constructor(private employee:EmployeeService){

  }

  offerDetails:any;
  startDate:any;
  endDate:any;
  startTime:any;
  endTime:any;
  descPercent:any;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  @Input() HMS:number[]=[];
  ngOnInit() {
    this.employee.getOffers().subscribe(data=>{
      console.log("offer data for db: "+data);
      this.employee.getOffers().subscribe(data=>{
      console.log("Offes data from db: "+JSON.stringify(data));
      console.log(JSON.stringify(data[0].end));
      this.offerDetails=data;
      this.endDate="d"+JSON.stringify(data[0].end);
      console.log(this.offerDetails[0].end);
      this.endDate=this.offerDetails[0].end;
      this.endTime=this.offerDetails[0].endTime;
      console.log(this.endDate);
      let dateAlone=this.endDate.slice(0,10);
      console.log(dateAlone);
      let endT=this.endTime+":00";
      console.log(endT);
      console.log(dateAlone+"T"+endT);
      this.descPercent=this.offerDetails[0].discountPercent.slice(0,2);
      this.descPercent=Number(this.descPercent);
      console.log(this.descPercent);
      const offerEndTime = new Date(dateAlone+"T"+endT);
      setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = offerEndTime.getTime() - currentTime;

        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      }, 1000);
      setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = offerEndTime.getTime() - currentTime;

        // Calculate the remaining time
        this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        this.HMS.push(this.hours,this.minutes,this.seconds);
      }, 1000);
    })

    })
    // Set the offer end time (adjust as needed)

    // const offerEndTime = new Date('');

    // Update the counter every second

  }
}





