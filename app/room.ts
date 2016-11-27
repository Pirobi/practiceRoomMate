import {Occupant} from './Occupant';

export class Room {
  roomName:string;
  occupied:boolean;
  history:Occupant[];
  constructor(name:string)
  {
    this.roomName = name;
    this.occupied = false;
    this.history = new Array<Occupant>();
  }

  getOccupant():Occupant{
    return this.history[0];
  }

  addOccupant(occupant:Occupant):void{
    this.history.unshift(occupant);
  }
}
