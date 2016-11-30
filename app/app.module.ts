import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { RoomSelection}  from './room-selection.component';
import { RoomForm }      from './room-form.component';
import { RoomService }   from './RoomService.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RoomSelection, RoomForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
