var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../const/languanges/languages.constant';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, translate, gblVar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.gblVar = gblVar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        if (this.translate.getBrowserLang() !== undefined) {
            var deviceLang = this.translate.getBrowserLang();
            if (deviceLang === 'ca' || deviceLang === 'en' || deviceLang === 'es' || deviceLang === 'de' || deviceLang === 'pt' || deviceLang === 'fr' || deviceLang === 'it') {
                this.gblVar.setLanguague(deviceLang);
            }
            else {
                this.gblVar.setLanguague(defaultLanguage);
            }
        }
        else {
            this.gblVar.setLanguague(defaultLanguage);
        }
    };
    AppComponent = __decorate([
        Component({ selector: 'app-root', templateUrl: 'app.component.html' }),
        __metadata("design:paramtypes", [Platform, SplashScreen, StatusBar, TranslateService, GlobalVarsService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map