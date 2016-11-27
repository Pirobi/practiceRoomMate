"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RoomService_service_1 = require('./RoomService.service');
var room_1 = require('./room');
var Occupant_1 = require('./Occupant');
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.name = 'Angular';
        this.submitted = false;
        this.model = new Occupant_1.Occupant();
    }
    AppComponent.prototype.getRooms = function () {
        var _this = this;
        this.service.getRooms().then(function (rooms) { return _this.rooms = rooms; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    AppComponent.prototype.onSelect = function (room) {
        this.selectedRoom = room;
        this.model = new Occupant_1.Occupant();
    };
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    AppComponent.prototype.checkIn = function () {
        this.model.checkIn();
        this.selectedRoom.occupied = true;
        this.selectedRoom.addOccupant(this.model);
        this.model = new Occupant_1.Occupant();
    };
    AppComponent.prototype.checkOut = function () {
        this.selectedRoom.occupied = false;
        this.selectedRoom.getOccupant().checkOut();
        this.model = new Occupant_1.Occupant();
    };
    __decorate([
        core_1.Injectable(), 
        __metadata('design:type', room_1.Room)
    ], AppComponent.prototype, "selectedRoom", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [RoomService_service_1.RoomService],
            template: "<h1 id=\"title\">Welcome to Practice RoomMate!</h1>\n  <div id=\"roomSelect\" class=\"col-sm-5\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Current Rooms</h3>\n      </div>\n      <div class=\"panel-body\" style=\"text-align:center;\">\n        <span *ngFor=\"let room of rooms\"\n          [class.selected]=\"room === selectedRoom\"\n          (click)=\"onSelect(room)\">\n          <button type=\"button\" class=\"btn btn-lg btn-default\">\n          <img src=\"../img/music-note-5.png\" style=\"width:50px;height:50px;\"/>\n          <br>\n          {{ room.roomName }}\n          <br>\n          <h3 class=\"occupied\" *ngIf=\"room.occupied\">Occupied</h3>\n          <h3 class=\"vacant\" *ngIf=\"!room.occupied\">Vacant</h3>\n          </button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-header\" *ngIf=\"selectedRoom\">\n    <table class=\"roomInfo\">\n      <tr>\n        <td>\n          <div id=\"roomPanel\" class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">{{selectedRoom.roomName}} Info</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div *ngIf=\"!selectedRoom.occupied\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"name\"\n                         required\n                         [(ngModel)]=\"model.name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Drexel Email</label>\n                  <input type=\"text\"  class=\"form-control\" id=\"email\"\n                          required\n                         [(ngModel)]=\"model.email\" name=\"email\">\n                </div>\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"checkIn()\">Check-In</button>\n              </div>\n              <div class=\"roomInfo\" *ngIf=\"selectedRoom.occupied\">\n                <h3>Currently Reserved To:</h3>\n                <h4>Name: {{selectedRoom.getOccupant().name}}</h4>\n                <br>\n                <h4>Checked In At: {{selectedRoom.getOccupant().timeIn}}</h4>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"checkOut()\">Check-Out</button>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td>\n          <div class=\"col-md-12\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Time In</th>\n                  <th>Time Out</th>\n                </tr>\n              </thead>\n              <tbody class=\"tableBody\">\n                <tr *ngFor=\"let o of selectedRoom.history\">\n                  <td>{{o.name}}</td>\n                  <td>{{o.timeIn}}</td>\n                  <td>{{o.timeOut}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"roomInfo col-sm-5\" *ngIf=\"!selectedRoom\">\n    <div class=\"panel panel-warning\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Select a Room</h3>\n      </div>\n      <div class=\"panel-body\">\n        <h2>No Room is Selected</h2>\n      </div>\n    </div>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [RoomService_service_1.RoomService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map