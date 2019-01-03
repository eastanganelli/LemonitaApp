import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancePage } from './advance.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';

@NgModule({
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
export class AdvancePageModule { }
