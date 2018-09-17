//#region Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//#endregion
//#region Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HistoryPage } from './../pages/history/history';
import { NewModePage } from './../pages/newmode/newmode';
//#endregion
export function createTranslateLoader(http: HttpClient) { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); }
@NgModule({
	declarations: [MyApp, HomePage, TabsPage, NewModePage, HistoryPage],
	imports: [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		TabsPage,
		NewModePage,
		HistoryPage
	],
	providers: [
		StatusBar,
		SplashScreen, {
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		}]
})
export class AppModule { }
