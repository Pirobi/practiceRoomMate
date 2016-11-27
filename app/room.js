"use strict";
var Room = (function () {
    function Room(name) {
        this.roomName = name;
        this.occupied = false;
        this.history = new Array();
    }
    Room.prototype.getOccupant = function () {
        return this.history[0];
    };
    Room.prototype.addOccupant = function (occupant) {
        this.history.unshift(occupant);
    };
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=room.js.map