import { Component, Injectable, OnInit } from '@angular/core';
import { RoomService} from './RoomService.service';
import {Room} from './room';
import {Occupant} from './Occupant';

@Component({
  selector: 'my-app',
  providers: [RoomService],
  template: `<h1 id="title">Welcome to Practice RoomMate!</h1>
  <div id="roomSelect" class="col-sm-5">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Current Rooms</h3>
      </div>
      <div class="panel-body" style="text-align:center;">
        <span *ngFor="let room of rooms"
          [class.selected]="room === selectedRoom"
          (click)="onSelect(room);">
          <button type="button" class="btn btn-lg btn-default" *ngIf="room !== selectedRoom">
            <img src="../img/music-note-5.png">
            <br>
            {{ room.roomName }}
            <br>
            <h3 class="occupied" *ngIf="room.occupied">Occupied</h3>
            <h3 class="vacant" *ngIf="!room.occupied">Vacant</h3>
          </button>

          <button type="button" class="btn btn-lg btn-warning" *ngIf="room === selectedRoom">
            <img src="../img/music-note-5.png">
            <br>
            {{ room.roomName }}
            <br>
            <h3 class="occupied" *ngIf="room.occupied">Occupied</h3>
            <h3 class="vacant" *ngIf="!room.occupied">Vacant</h3>
          </button>
        </span>
      </div>
    </div>
  </div>
  <div class="page-header" *ngIf="selectedRoom">
    <table class="roomInfo">
      <tr>
        <td>
          <div id="roomPanel" class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">{{selectedRoom.roomName}} Info</h3>
            </div>
            <div class="panel-body">
              <div *ngIf="!selectedRoom.occupied">
                <form (ngSubmit)="onSubmit()" #roomForm="ngForm">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name"
                         required
                         [(ngModel)]="model.name" name="name" #name="ngModel">
                </div>
                <div class="form-group">
                  <label for="email">Drexel Email</label>
                  <input type="text"  class="form-control" id="email"
                          required
                         [(ngModel)]="model.email" name="email" #email="ngModel">
                </div>
                <button type="submit" class="btn btn-success" [disabled]="!roomForm.form.valid">Check-In</button>
                </form>
              </div>
              <div class="roomInfo" *ngIf="selectedRoom.occupied">
                <h3>Currently Reserved To:</h3>
                <h4>Name: {{selectedRoom.getOccupant().name}}</h4>
                <br>
                <h4>Checked In At: {{selectedRoom.getOccupant().timeIn}}</h4>
                <button type="button" class="btn btn-danger" (click)="checkOut()">Check-Out</button>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                </tr>
              </thead>
              <tbody class="tableBody">
                <tr *ngFor="let o of selectedRoom.history">
                  <td>{{o.name}}</td>
                  <td>{{o.timeIn}}</td>
                  <td>{{o.timeOut}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="roomInfo col-sm-5" *ngIf="!selectedRoom">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <h3 class="panel-title">Select a Room</h3>
      </div>
      <div class="panel-body">
        <h2>No Room is Selected</h2>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent  { name = 'Angular';
  rooms:Room[];
  @Injectable() selectedRoom:Room;
  submitted = false;
    model = new Occupant();
    constructor(private service:RoomService){

    }
    getRooms(): void {
    this.service.getRooms().then(rooms => this.rooms = rooms);
  }

  ngOnInit():void {
    this.getRooms();
  }

  onSelect(room : Room): void {
    this.selectedRoom = room;
    this.model = new Occupant();
  }

onSubmit(){
  this.submitted = true;
  this.checkIn();
}
  checkIn():void{
    this.model.checkIn();
    this.selectedRoom.occupied = true;
    this.selectedRoom.addOccupant(this.model);
    this.model = new Occupant();
  }

  checkOut():void{
    this.selectedRoom.occupied = false;
    this.selectedRoom.getOccupant().checkOut();
    this.model = new Occupant();
  }
}
