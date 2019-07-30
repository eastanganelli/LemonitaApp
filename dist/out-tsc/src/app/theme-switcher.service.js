import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
//#endregion
var ThemeSwitcherService = /** @class */ (function () {
    function ThemeSwitcherService(domCtrl, document) {
        this.domCtrl = domCtrl;
        this.document = document;
        this.themes = [];
        this.currentTheme = 0;
        this.themes = [{
                name: 'night',
                styles: [
                    { themeVariable: '--ion-color-primary', value: '#0ec254' },
                    { themeVariable: '--ion-color-primary-rgb', value: '34,34,34' },
                    { themeVariable: '--ion-color-primary-contrast', value: '#f5f6f9' },
                    { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255' },
                    { themeVariable: '--ion-color-primary-shade', value: '#1e2023' },
                    { themeVariable: '--ion-color-primary-tint', value: '#383a3e' },
                    { themeVariable: '--ion-text-color', value: '#f5f6f9' },
                    //{ themeVariable: '--ion-item-background', value: '#383838'},
                    //{ themeVariable: '--ion-tab-bar-background', value: '#222428'},
                    { themeVariable: '--ion-tab-bar-color-actived', value: '#f4f5f8' },
                    { themeVariable: '--ion-background-color', value: '#383838' }
                ]
            }, {
                name: 'light',
                styles: [
                    { themeVariable: '--ion-color-primary', value: '#3880ff' },
                    { themeVariable: '--ion-color-primary-rgb', value: '56,128,255' },
                    { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
                    { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255' },
                    { themeVariable: '--ion-color-primary-shade', value: '#3171e0' },
                    { themeVariable: '--ion-color-primary-tint', value: '#4c8dff' },
                    { themeVariable: '--ion-text-color', value: '#222428' },
                    { themeVariable: '--ion-item-background', value: '#f4f5f8' },
                    { themeVariable: '--ion-tab-bar-background', value: '#f4f5f8' },
                    { themeVariable: '--ion-tab-bar-color-actived', value: '#f4f5f8' },
                    { themeVariable: '--ion-background-color', value: '#f4f5f8' }
                ]
            }];
    }
    ThemeSwitcherService.prototype.cycleTheme = function () {
        if (this.themes.length > this.currentTheme + 1) {
            this.currentTheme++;
        }
        else {
            this.currentTheme = 0;
        }
        this.setTheme(this.themes[this.currentTheme].name);
    };
    ThemeSwitcherService.prototype.setTheme = function (name) {
        var theme = this.themes.find(function (theme) { return theme.name === name; });
        this.domCtrl.write(function () { theme.styles.forEach(function (style) { document.documentElement.style.setProperty(style.themeVariable, style.value); }); });
    };
    ThemeSwitcherService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [DomController, Object])
    ], ThemeSwitcherService);
    return ThemeSwitcherService;
}());
export { ThemeSwitcherService };
//# sourceMappingURL=theme-switcher.service.js.map