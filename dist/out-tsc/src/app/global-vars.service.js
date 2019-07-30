import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var GlobalVarsService = /** @class */ (function () {
    //#endregion
    function GlobalVarsService(storage) {
        this.storage = storage;
        //#region Advance
        this.AppLanguague = null;
        //#region variablesGlobales
        this.tempData = null;
        this.history = new Array(0);
        this.settings = null;
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
    GlobalVarsService.prototype.readCache = function (tipo_) {
        var _this = this;
        return new Promise(function (resolve) {
            switch (tipo_) {
                case 'DatosCache': {
                    _this.storage.get(tipo_).then(function (data) { _this.tempData = data; _this.CachePpl = _this.tempData; resolve(data); });
                    break;
                }
                case 'DatoHistorial': {
                    _this.storage.get(tipo_).then(function (data) { _this.history = data; resolve(data); });
                    break;
                }
                case 'DatoSettings': {
                    _this.storage.get(tipo_).then(function (data) { _this.settings = data; resolve(data); });
                    break;
                }
            }
        });
    };
    GlobalVarsService.prototype.writeCache = function (in_, tipo_) {
        switch (tipo_) {
            case 'DatosCache': {
                this.storage.set(tipo_, in_);
                this.CachePpl = in_;
                break;
            }
            case 'DatoHistorial': {
                this.storage.set(tipo_, in_);
                this.history = in_;
                break;
            }
            case 'DatoSettings': {
                this.storage.set(tipo_, in_);
                this.settings = in_;
                break;
            }
        }
    };
    GlobalVarsService.prototype.updateCache = function (id_, data_, tipo_) {
        switch (tipo_) {
            case 'DatosCache': {
                this.CachePpl.personas[id_].data = data_;
                this.writeCache(this.CachePpl, tipo_);
                break;
            }
        }
    };
    GlobalVarsService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], GlobalVarsService);
    return GlobalVarsService;
}());
export { GlobalVarsService };
//# sourceMappingURL=global-vars.service.js.map