import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancePage } from './advance.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
var AdvancePageModule = /** @class */ (function () {
    function AdvancePageModule() {
    }
    AdvancePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                HttpClientModule,
                RouterModule.forChild([{ path: '', component: AdvancePage }]),
                TranslateModule.forChild({ loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] } })
            ],
            declarations: [AdvancePage]
        })
    ], AdvancePageModule);
    return AdvancePageModule;
}());
export { AdvancePageModule };
//# sourceMappingURL=advance.module.js.map