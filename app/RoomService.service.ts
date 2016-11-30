import { Injectable } from '@angular/core';
import { Room } from './room';
import { ROOMS } from './RoomList';

@Injectable()
export class RoomService {
  selectedRoom: Room;
  getSelectedRoom():Room{
    return this.selectedRoom;
  }
  setSelectedRoom(r : Room):void{
    this.selectedRoom = r;
  }
  getRooms(): Promise<Room[]> {
    return Promise.resolve(ROOMS);
  }
}
