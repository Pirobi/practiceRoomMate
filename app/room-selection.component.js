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
var Occupant_1 = require('./Occupant');
var RoomSelection = (function () {
    function RoomSelection(service) {
        this.service = service;
        this.submitted = false;
        this.model = new Occupant_1.Occupant();
    }
    RoomSelection.prototype.getRooms = function () {
        var _this = this;
        this.service.getRooms().then(function (rooms) { return _this.rooms = rooms; });
    };
    RoomSelection.prototype.getSelectedRoom = function () {
        return this.service.getSelectedRoom();
    };
    RoomSelection.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomSelection.prototype.onSelect = function (room) {
        this.service.setSelectedRoom(room);
        this.model = new Occupant_1.Occupant();
    };
    RoomSelection = __decorate([
        core_1.Component({
            selector: 'room-selection',
            templateUrl: 'room-selection.component.html' }), 
        __metadata('design:paramtypes', [RoomService_service_1.RoomService])
    ], RoomSelection);
    return RoomSelection;
}());
exports.RoomSelection = RoomSelection;
//# sourceMappingURL=room-selection.component.js.map