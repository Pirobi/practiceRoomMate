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
var RoomList_1 = require('./RoomList');
var RoomService = (function () {
    function RoomService() {
        this.roomInfo = { selectedRoom: null };
    }
    RoomService.prototype.getSelectedRoom = function () {
        return this.roomInfo.selectedRoom;
    };
    RoomService.prototype.setSelectedRoom = function (r) {
        this.roomInfo.selectedRoom = r;
    };
    RoomService.prototype.getRooms = function () {
        return Promise.resolve(RoomList_1.ROOMS);
    };
    RoomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RoomService);
    return RoomService;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=RoomService.service.js.map