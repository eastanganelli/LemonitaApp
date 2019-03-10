import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { AdvancePageModule } from '../advance/advance.module';
import { Tab3PageModule } from '../history/tab3.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forChild([{ path: '', component: TabsPage }]),
		TranslateModule.forChild({ loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] } }),
		TabsPageRoutingModule,
		HomePageModule,
		AdvancePageModule,
		Tab3PageModule
	],
	declarations: [TabsPage]
})
export class TabsPageModule { }