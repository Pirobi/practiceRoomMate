export class Occupant{
  name:string;
  timeIn:string;
  timeOut:string;
  email:string;

  constructor(){
    this.timeOut = "-";
  }

  getCurrentTime(): string{
    var d = new Date();
    var h = d.getHours() > 12 ? d.getHours()-12 : d.getHours();
    var am = d.getHours() > 12 ? "pm" : "am";
    return h + ":" + d.getMinutes() + am;
  }

  checkOut():void{
    this.timeOut = this.getCurrentTime();
  }

  checkIn():void{
    this.timeIn = this.getCurrentTime();
  }
}
