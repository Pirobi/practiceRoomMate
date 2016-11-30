"use strict";
var Occupant = (function () {
    function Occupant() {
        this.timeOut = "-";
    }
    Occupant.prototype.getCurrentTime = function () {
        var d = new Date();
        var h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        var m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        var am = d.getHours() > 12 ? "pm" : "am";
        return h + ":" + d.getMinutes() + am;
    };
    Occupant.prototype.checkOut = function () {
        this.timeOut = this.getCurrentTime();
    };
    Occupant.prototype.checkIn = function () {
        this.timeIn = this.getCurrentTime();
    };
    return Occupant;
}());
exports.Occupant = Occupant;
//# sourceMappingURL=Occupant.js.map