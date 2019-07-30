import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';
var ErrorMSGService = /** @class */ (function () {
    function ErrorMSGService(alertCtrl, gblVars, translate) {
        this.alertCtrl = alertCtrl;
        this.gblVars = gblVars;
        this.translate = translate;
    }
    ErrorMSGService.prototype.showAlertCtrl = function (errorCode) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var myAlert, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = errorCode;
                        switch (_a) {
                            case 'ExCMMnt': return [3 /*break*/, 1];
                            case 'ExCMDataPpl': return [3 /*break*/, 2];
                            case 'ExAMNoMeData': return [3 /*break*/, 5];
                            case 'ExTipPor': return [3 /*break*/, 6];
                            case 'ExIUDecr': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 12];
                    case 1:
                        {
                            //this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); }); await myAlert.present();
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.alertCtrl.create({ header: "Error People", message: "Las personas no tienen datos cargados para calcular", buttons: [{ text: "Cerrar" }] })];
                    case 3:
                        myAlert = _b.sent();
                        return [4 /*yield*/, myAlert.present()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 5:
                        {
                            return [3 /*break*/, 12];
                        }
                        _b.label = 6;
                    case 6: return [4 /*yield*/, this.alertCtrl.create({ header: "Error Propina", message: "No se selecciona el porcentaje", buttons: [{ text: "Cerrar" }] })];
                    case 7:
                        myAlert = _b.sent();
                        return [4 /*yield*/, myAlert.present()];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 9: return [4 /*yield*/, this.alertCtrl.create({ header: "Error Decremento", message: "No se puede desecrementar más", buttons: [{ text: "Cerrar" }] })];
                    case 10:
                        myAlert = _b.sent();
                        return [4 /*yield*/, myAlert.present()];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    ErrorMSGService.prototype.itsComplete = function (iSelec) {
        var cnt_error = 0;
        if (iSelec == 0) {
            this.showAlertCtrl('ExTipPor');
            cnt_error++;
        }
        {
            var all_ppl = 0;
            for (var _i = 0, _a = this.gblVars.CachePpl.personas; _i < _a.length; _i++) {
                var pers = _a[_i];
                if (pers.data.length < 1 && this.gblVars.CachePpl.personas.length > 1) {
                    all_ppl++;
                }
            }
            if (all_ppl >= this.gblVars.CachePpl.personas.length) {
                this.showAlertCtrl("ExCMDataPpl");
                cnt_error++;
            }
        }
        if (this.gblVars.CachePpl.personas[0].data.length < 1 && this.gblVars.CachePpl.personas.length < 2) {
            this.showAlertCtrl('ExAMNoMeData');
            cnt_error++;
        }
        return cnt_error;
    };
    ErrorMSGService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [AlertController, GlobalVarsService, TranslateService])
    ], ErrorMSGService);
    return ErrorMSGService;
}());
export { ErrorMSGService };
//# sourceMappingURL=error-msg.service.js.map