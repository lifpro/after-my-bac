"use strict";
exports.__esModule = true;
exports.Choix = void 0;
var Choix = /** @class */ (function () {
    function Choix() {
        this.selected = false;
        this.list = [];
    }
    Choix.prototype.add = function (_filiere) {
        this.list.push(_filiere);
    };
    Choix.prototype.show = function () {
        console.table(this.list);
    };
    return Choix;
}());
exports.Choix = Choix;
