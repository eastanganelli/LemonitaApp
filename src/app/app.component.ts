import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from './../pages/tabs/tabs';

@Component({ templateUrl: 'app.html' })
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = TabsPage;
	pages: Array<{ title: string, component: any }>;
	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public translate: TranslateService) {
		this.initializeApp();
	}
	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	openPage(page) { this.nav.setRoot(page.component); }
}
