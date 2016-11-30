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
var RoomForm = (function () {
    function RoomForm(service) {
        this.service = service;
        this.submitted = false;
        this.model = new Occupant_1.Occupant();
    }
    RoomForm.prototype.getSelectedRoom = function () {
        return this.service.getSelectedRoom();
    };
    RoomForm.prototype.onSubmit = function () {
        this.submitted = true;
        this.checkIn();
    };
    RoomForm.prototype.checkIn = function () {
        this.model.checkIn();
        this.getSelectedRoom().occupied = true;
        this.getSelectedRoom().addOccupant(this.model);
        this.model = new Occupant_1.Occupant();
    };
    RoomForm.prototype.checkOut = function () {
        this.getSelectedRoom().occupied = false;
        this.getSelectedRoom().getOccupant().checkOut();
        this.model = new Occupant_1.Occupant();
    };
    RoomForm = __decorate([
        core_1.Component({
            selector: 'room-form',
            providers: [RoomService_service_1.RoomService],
            templateUrl: 'room-form.component.html' }), 
        __metadata('design:paramtypes', [RoomService_service_1.RoomService])
    ], RoomForm);
    return RoomForm;
}());
exports.RoomForm = RoomForm;
//# sourceMappingURL=room-form.component.js.map