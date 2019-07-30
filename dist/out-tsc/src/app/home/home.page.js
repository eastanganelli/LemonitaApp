import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CalculatorService } from '../calculator.service';
import { GlobalVarsService } from '../global-vars.service';
var HomePage = /** @class */ (function () {
    //#endregion
    function HomePage(navCtrl, alertCtrl, toastCtrl, translate, calc, gblVar) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.calc = calc;
        this.gblVar = gblVar;
        //#region Vars
        this.dataIn = {
            iMonto: 0,
            iCant: 0,
            iRange: 50,
            iSelec: 0
        };
        this.dataOut = {
            outPropina: 0,
            outByPeopleTip: 0,
            outTotal: 0,
            outByPeople: 0
        };
    }
    /*Fns*/
    HomePage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.setDefaultLang(this.gblVar.getLanguague())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.translate.use(this.gblVar.getLanguague())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*MsgControllers*/
    HomePage.prototype.showAlert = function (vTitle, vSubtitle, vButton) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({ header: vTitle, subHeader: vSubtitle + '.', buttons: [vButton] })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showToaster = function (vString) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toaster;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: vString, position: 'bottom', duration: 2500 })];
                    case 1:
                        toaster = _a.sent();
                        return [4 /*yield*/, toaster.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.mathProp = function (iMonto, iCant, iRange, iSelec) { this.dataOut = this.calc.classicMode(iMonto, iCant, iRange / 100, iSelec); };
    HomePage.prototype.CheckCant = function (vCant) {
        var _this = this;
        if (vCant < 1 && String(vCant) != "") {
            this.translate.get('TST.MSGMISS').subscribe(function (trText) { _this.showToaster(trText); });
        }
    };
    HomePage = tslib_1.__decorate([
        Component({ selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'] }),
        tslib_1.__metadata("design:paramtypes", [NavController, AlertController, ToastController, TranslateService, CalculatorService, GlobalVarsService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map