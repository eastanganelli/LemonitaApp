var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var GlobalVarsService = /** @class */ (function () {
    //#endregion
    function GlobalVarsService() {
        //#region Advance
        this.AppLanguague = null;
        //#region variablesGlobales
        this.tempData = null;
        this.history = new Array(0);
        //#endregion
        //#region Arrays
        this.CachePpl = { time_: 0, personas: new Array(0) };
        this.ppParARR = new Array(0);
        this.ppEqARR = new Array(0);
        //#endregion
        //#region DataOUT
        this.usersNodata = false;
        //#endregion
        //#endregion
        //#region Classic
        this.outPropina = 0;
        this.outByPeopleTip = 0;
        this.outIdiom = null;
        this.dtQuality = 0;
        this.outTotal = 0;
        this.outByPeople = 0;
    }
    GlobalVarsService.prototype.setLanguague = function (Lang_) { this.AppLanguague = Lang_; };
    GlobalVarsService.prototype.getLanguague = function () { return this.AppLanguague; };
    GlobalVarsService.prototype.readCache = function () { this.tempData = JSON.parse(localStorage.getItem('DatosCache')); this.CachePpl = this.tempData; return this.tempData; };
    GlobalVarsService.prototype.writeCache = function (in_) { localStorage.setItem('DatosCache', JSON.stringify(in_)); this.CachePpl = in_; };
    GlobalVarsService.prototype.updateCache = function (id_, data_) { this.CachePpl.personas[id_].data = data_; this.writeCache(this.CachePpl); };
    GlobalVarsService.prototype.readHistory = function () { return this.history; };
    GlobalVarsService.prototype.writeHistory = function (in_) { };
    GlobalVarsService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], GlobalVarsService);
    return GlobalVarsService;
}());
export { GlobalVarsService };
//# sourceMappingURL=global-vars.service.js.map