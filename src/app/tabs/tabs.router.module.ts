import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AdvancePage } from '../advance/advance.page';
import { Tab3Page } from '../history/tab3.page';

const routes: Routes = [
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
				component: Tab3Page
			}
		]
	}, {
		path: '',
		redirectTo: '/tabs/(tab1:tab1)',
		pathMatch: 'full'
	}
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class TabsPageRoutingModule { }
