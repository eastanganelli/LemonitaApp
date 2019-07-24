import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { ThemeSwitcherService } from '../theme-switcher.service';


@Component({ selector: 'app-settings', templateUrl: 'settings.page.html', styleUrls: ['settings.page.scss'] })
export class SettingsPage {
	appData:{ appName: any; versionCode: any; versionNum: any } = { appName: 'TipCalculator', versionCode: 'android', versionNum: '0.0.0' };
	year: any = null;
	darkTheme: boolean = false;
	constructor(public navCtrl: NavController, public switchTheme: ThemeSwitcherService) { 
		this.appData.versionNum = '4.0.0';
		this.year = (new Date()).getFullYear();
	}
	ionViewWillEnter() {
		
	}
	themeChange() { this.switchTheme.cycleTheme(); }
}