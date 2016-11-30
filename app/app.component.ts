import { Component } from '@angular/core';
import { RoomService } from './RoomService.service';

@Component({
  selector: 'my-app',
  providers: [ RoomService ],
  template: `<room-selection></room-selection><room-form></room-form>`,
})
export class AppComponent{}
