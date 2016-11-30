import { Component, } from '@angular/core';
import { RoomService } from './RoomService.service';
import {Room} from './room';
import {Occupant} from './Occupant';

@Component({
  selector: 'room-form',
  providers: [RoomService],
  templateUrl: 'room-form.component.html'})
  export class RoomForm{
    submitted = false;
      model = new Occupant();
      constructor(private service:RoomService){}
        getSelectedRoom():Room{
          return this.service.getSelectedRoom();
        }
      onSubmit(){
        this.submitted = true;
        this.checkIn();
      }
        checkIn():void{
          this.model.checkIn();
          this.getSelectedRoom().occupied = true;
          this.getSelectedRoom().addOccupant(this.model);
          this.model = new Occupant();
        }

        checkOut():void{
          this.getSelectedRoom().occupied = false;
          this.getSelectedRoom().getOccupant().checkOut();
          this.model = new Occupant();
        }
    }
