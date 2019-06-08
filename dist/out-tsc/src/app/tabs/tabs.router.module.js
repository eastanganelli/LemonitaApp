var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AdvancePage } from '../advance/advance.page';
import { HistoryPage } from '../history/history.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(tab1:tab1)',
                pathMatch: 'full',
            },
            {
                path: 'tab1',
                outlet: 'tab1',
                component: HomePage
            },
            {
                path: 'tab2',
                outlet: 'tab2',
                component: AdvancePage
            },
            {
                path: 'tab3',
                outlet: 'tab3',
                component: HistoryPage
            }
        ]
    }, {
        path: '',
        redirectTo: '/tabs/(tab1:tab1)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map