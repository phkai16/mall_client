import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './homecinema.component.html',
})
export class HomeCinemaComponent implements OnInit{
  todayDate1 : Date = new Date();
  todayDate2 : Date = new Date();
  todayDate3 : Date = new Date();
  todayDate4 : Date = new Date();
  todayDate5 : Date = new Date();
  todayDate6 : Date = new Date();
  todayDate7 : Date = new Date();


  date1: number;
  date2: number;
  date3: number;
  date4: number;
  date5: number;
  date6: number;
  date7: number;

  string: string = 'Wednesday, September 6, 2023';

  ngOnInit(){
    
    this.date1 = this.todayDate1.setDate(this.todayDate1.getDate() + 0);
    this.date2 = this.todayDate2.setDate(this.todayDate2.getDate() + 1);
    this.date3 = this.todayDate3.setDate(this.todayDate3.getDate() + 2);
    this.date4 = this.todayDate4.setDate(this.todayDate4.getDate() + 3);
    this.date5 = this.todayDate5.setDate(this.todayDate5.getDate() + 4);
    this.date6 = this.todayDate6.setDate(this.todayDate6.getDate() + 5);
    this.date7 = this.todayDate7.setDate(this.todayDate7.getDate() + 6);

    console.log(new Date(this.string));
   
   
  }
  check(evt: any){
    var value: any = evt.target.value;

    console.log(value);
  }
}
