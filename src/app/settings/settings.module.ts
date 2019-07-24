import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forChild([{ path: '', component: SettingsPage }]),
		TranslateModule.forChild({ loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] } })
	],
	declarations: [SettingsPage]
})
export class SettingsPageModule { }
