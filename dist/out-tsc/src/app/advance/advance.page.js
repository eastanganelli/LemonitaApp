import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { CalculatorService } from '../calculator.service';
import { ErrorMSGService } from '../error-msg.service';
import { ModalItemsUserComponent } from '../modal-items-user/modal-items-user.component';
var AdvancePage = /** @class */ (function () {
    //#endregion
    //#endregion
    function AdvancePage(navCtrl, alertCtrl, modalCtrl, translate, glbVar, calc, alertSrvce) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.glbVar = glbVar;
        this.calc = calc;
        this.alertSrvce = alertSrvce;
        //#region Vars
        //#region Arrays
        this.ppArr = { time_: 0, personas: new Array(0) };
        this.ppParARR = new Array(0);
        this.ppEqARR = new Array(0);
        //#endregion
        //#region DataIN
        this.notCalculated = true;
        this.ppTT = 0;
        this.valQuality = 0;
        this.rangeValue = 50;
        this.tipData_ = 'Equal_';
        //#endregion
        //#region 
        this.limTime = 21600000;
    }
    AdvancePage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.readData();
                        return [4 /*yield*/, this.translate.setDefaultLang(this.glbVar.getLanguague())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.translate.use(this.glbVar.getLanguague())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //#region pplFNs
    AdvancePage.prototype.addPer = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userpop;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ingresar Nombre',
                            inputs: [{ name: 'nameIN', type: 'text' }],
                            buttons: [{ text: 'Cancel' }, { text: 'Add', role: 'add', handler: function (data) { _this.ppArr.personas.push({ name_: data.nameIN, data: new Array(0) }); _this.saveData(); } }]
                        })];
                    case 1:
                        userpop = _a.sent();
                        userpop.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancePage.prototype.openPer = function (id_) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modalItemByUser;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: ModalItemsUserComponent, componentProps: { userID: id_, tipo_: 'modList' } })];
                    case 1:
                        modalItemByUser = _a.sent();
                        modalItemByUser.onDidDismiss().then(function () { _this.readData(); });
                        return [4 /*yield*/, modalItemByUser.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancePage.prototype.rmPer = function (id) { this.ppArr.personas.splice(id, 1); this.saveData(); };
    AdvancePage.prototype.notMe = function (id) { if (id != 0) {
        return false;
    } return true; };
    //#endregion
    //#region FN
    AdvancePage.prototype.calculate = function (iRange, iSelec) {
        if (this.alertSrvce.itsComplete(iSelec) == 0) {
            var m_data = this.calc.advanceCalc(iRange / 100, iSelec);
            this.notCalculated = false;
        }
    };
    AdvancePage.prototype.close = function () {
        this.notCalculated = true;
        this.ppEqARR = new Array(0);
        this.ppParARR = new Array(0);
    };
    //#endregion
    //#region cacheFNs
    AdvancePage.prototype.readData = function () {
        var _this = this;
        this.glbVar.readCache('DatosCache').then(function (data) {
            if (data != null) {
                var actual_time = ((new Date()).getTime()) - _this.limTime; //21600000
                //Hacer un Alert que pregunte si quiere guardar o borrar
                if (data.time_ < actual_time) {
                    _this.clearData();
                }
                else {
                    _this.ppArr = data;
                }
            }
            else {
                _this.clearData();
            }
        });
    };
    AdvancePage.prototype.saveData = function () { this.glbVar.writeCache(this.ppArr, 'DatosCache'); this.close(); };
    AdvancePage.prototype.clearData = function () {
        var aux_per = new Array(0);
        this.ppArr = { time_: (new Date()).getTime(), personas: aux_per };
        this.ppArr.personas.push({ name_: 'Me', data: new Array(0) }),
            this.glbVar.writeCache(this.ppArr, 'DatosCache');
    };
    AdvancePage = tslib_1.__decorate([
        Component({ selector: 'app-advance', templateUrl: 'advance.page.html', styleUrls: ['advance.page.scss'] }),
        tslib_1.__metadata("design:paramtypes", [NavController, AlertController, ModalController, TranslateService, GlobalVarsService, CalculatorService, ErrorMSGService])
    ], AdvancePage);
    return AdvancePage;
}());
export { AdvancePage };
//# sourceMappingURL=advance.page.js.map