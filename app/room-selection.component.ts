import { Component, Injectable, OnInit } from '@angular/core';
import { RoomService } from './RoomService.service';
import {Room} from './room';
import {Occupant} from './Occupant';

@Component({
  selector: 'room-selection',
  providers: [RoomService],
  templateUrl: 'room-selection.component.html'})
  export class RoomSelection{
    rooms:Room[];
    submitted = false;
      model = new Occupant();
      constructor(private service:RoomService){}
      getRooms(): void {
      this.service.getRooms().then(rooms => this.rooms = rooms);
    }

    ngOnInit():void {
      this.getRooms();
    }

    getSelectedRoom():Room{
      return this.service.getSelectedRoom();
    }

    onSelect(room : Room): void {
      this.service.setSelectedRoom(room);
      this.model = new Occupant();
    }

  onSubmit(){
    this.submitted = true;
    this.checkIn();
  }
    checkIn():void{
      this.model.checkIn();
      this.service.getSelectedRoom().occupied = true;
      this.service.getSelectedRoom().addOccupant(this.model);
      this.model = new Occupant();
    }

    checkOut():void{
      this.getSelectedRoom().occupied = false;
      this.getSelectedRoom().getOccupant().checkOut();
      this.model = new Occupant();
    }
  }
