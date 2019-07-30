import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
var TabsPage = /** @class */ (function () {
    function TabsPage(translate, gblVar) {
        this.translate = translate;
        this.gblVar = gblVar;
        this.classicMode = false;
    }
    TabsPage.prototype.ionViewWillEnter = function () { };
    TabsPage = tslib_1.__decorate([
        Component({ selector: 'app-tabs', templateUrl: 'tabs.page.html', styleUrls: ['tabs.page.scss'] }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, GlobalVarsService])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map