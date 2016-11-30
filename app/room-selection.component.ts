import { Component, Injectable, OnInit } from '@angular/core';
import { RoomService, RoomInfo } from './RoomService.service';
import {Room} from './room';
import {Occupant} from './Occupant';

@Component({
  selector: 'room-selection',
  providers: [RoomService],
  templateUrl: 'room-selection.component.html'})
  export class RoomSelection{
    rooms:Room[];
    roomInfo: RoomInfo;
    submitted = false;
      model = new Occupant();
      constructor(private service:RoomService){this.roomInfo = this.service.roomInfo;}
      getRooms(): void {
      this.service.getRooms().then(rooms => this.rooms = rooms);
    }

    ngOnInit():void {
      this.getRooms();
    }

    getSelectedRoom():Room{
      return this.roomInfo.selectedRoom;
    }

    onSelect(room : Room): void {
      this.roomInfo.selected = room;
      this.model = new Occupant();
    }

  onSubmit(){
    this.submitted = true;
    this.checkIn();
  }
    checkIn():void{
      this.model.checkIn();
      this.service.getSelectedRoom().occupied = true;
      this.selectedRoom.addOccupant(this.model);
      this.model = new Occupant();
    }

    checkOut():void{
      this.selectedRoom.occupied = false;
      this.selectedRoom.getOccupant().checkOut();
      this.model = new Occupant();
    }
  }
