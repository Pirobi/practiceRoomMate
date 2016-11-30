import { Injectable } from '@angular/core';
import { Room } from './room';
import { ROOMS } from './RoomList';

export interface RoomInfo{
  selectedRoom:Room;
}

@Injectable()
export class RoomService {
  roomInfo: RoomInfo = {selectedRoom : null};
  getSelectedRoom():Room{
    return this.roomInfo.selectedRoom;
  }
  setSelectedRoom(r : Room):void{
    this.roomInfo.selectedRoom = r;
  }
  getRooms(): Promise<Room[]> {
    return Promise.resolve(ROOMS);
  }
}
