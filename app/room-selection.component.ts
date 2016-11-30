import { Component, Injectable, OnInit } from '@angular/core';
import { RoomService } from './RoomService.service';
import {Room} from './room';
import {Occupant} from './Occupant';

@Component({
  selector: 'room-selection',
  templateUrl: 'room-selection.component.html'})
  export class RoomSelection{
    rooms:Room[];
    submitted = false;
      model = new Occupant();
      constructor(private service:RoomService){}
      getRooms(): void {
      this.service.getRooms().then(rooms => this.rooms = rooms);
    }
    getSelectedRoom():Room{
      return this.service.getSelectedRoom();
    }
    ngOnInit():void {
      this.getRooms();
    }

    onSelect(room : Room): void {
      this.service.setSelectedRoom(room);
      this.model = new Occupant();
    }
  }
