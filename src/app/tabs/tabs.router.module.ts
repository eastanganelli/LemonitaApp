import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'tab1',
				children: [
					{
						path: '',
						loadChildren: '../home/home.module#HomePageModule'
					}
				]
			},
			{
				path: 'tab2',
				children: [
					{
						path: '',
						loadChildren: '../advance/advance.module#AdvancePageModule'
					}
				]
			},
			{
				path: 'tab3',
				children: [
					{
						path: '',
						loadChildren: '../history/history.module#HistoryPageModule'
					}
				]
			},
			{
				path: 'tab4',
				children: [
					{
						path: '',
						loadChildren: '../settings/settings.module#SettingsPageModule'
					}
				]
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class TabsPageRoutingModule { }