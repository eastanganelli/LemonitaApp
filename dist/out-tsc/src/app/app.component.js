import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../const/languanges/languages.constant';
import { ThemeSwitcherService } from './theme-switcher.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, translate, theme, gblVar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.theme = theme;
        this.gblVar = gblVar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //#region splashScr and statusbar
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //#endregion
            //#region TRANSLATE
            if (_this.translate.getBrowserLang() !== undefined) {
                var deviceLang = _this.translate.getBrowserLang();
                if (deviceLang === 'ca' || deviceLang === 'en' || deviceLang === 'es' || deviceLang === 'de' || deviceLang === 'pt' || deviceLang === 'fr' || deviceLang === 'it') {
                    _this.gblVar.setLanguague(deviceLang);
                }
                else {
                    _this.gblVar.setLanguague(defaultLanguage);
                }
            }
            else {
                _this.gblVar.setLanguague(defaultLanguage);
            }
            //#endregion
            //#region loadSettings
            _this.gblVar.readCache('DatoSettings').then(function (_data) {
                if (_data == null) {
                    _this.gblVar.writeCache({ lang_: ' ', theme_: 'light', cMode: false }, 'DatoSettings');
                    //this.theme.setTheme('light'); 
                }
                else {
                    _this.theme.setTheme(_data.theme_);
                }
            });
            //#endregion
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({ selector: 'app-root', templateUrl: 'app.component.html' }),
        tslib_1.__metadata("design:paramtypes", [Platform, SplashScreen, StatusBar, TranslateService, ThemeSwitcherService, GlobalVarsService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map