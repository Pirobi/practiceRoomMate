import { Injectable } from '@angular/core';
import { Room } from './room';
import { ROOMS } from './RoomList';
@Injectable()
export class RoomService {
  getRooms(): Promise<Room[]> {
    return Promise.resolve(ROOMS);
  }
}
