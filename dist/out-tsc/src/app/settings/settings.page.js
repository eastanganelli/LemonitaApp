import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcherService } from '../theme-switcher.service';
var SettingsPage = /** @class */ (function () {
    //#endregion
    function SettingsPage(navCtrl, translate, glbVar, switchTheme) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.glbVar = glbVar;
        this.switchTheme = switchTheme;
        //#region  Vars
        this.appData = { appName: 'TipCalculator', versionCode: 'android', versionNum: '0.0.0' };
        this.year = null;
        this._settings = null;
        this.appData.versionNum = '4.0.0';
        this.year = (new Date()).getFullYear();
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translate.setDefaultLang(this.glbVar.getLanguague())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.translate.use(this.glbVar.getLanguague())];
                    case 2:
                        _a.sent();
                        this.glbVar.readCache('DatoSettings').then(function (data_) { _this._settings = data_; });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.themeChange = function () { this.switchTheme.cycleTheme(); };
    SettingsPage.prototype.classicChange = function () { this.glbVar.writeCache(this._settings, 'DatoSettings'); };
    SettingsPage = tslib_1.__decorate([
        Component({ selector: 'app-settings', templateUrl: 'settings.page.html', styleUrls: ['settings.page.scss'] }),
        tslib_1.__metadata("design:paramtypes", [NavController, TranslateService, GlobalVarsService, ThemeSwitcherService])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map