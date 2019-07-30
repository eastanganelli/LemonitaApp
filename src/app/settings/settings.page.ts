import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcherService } from '../theme-switcher.service';
import { tSettings } from 'src/const/variables.components';

@Component({ selector: 'app-settings', templateUrl: 'settings.page.html', styleUrls: ['settings.page.scss'] })
export class SettingsPage {
	//#region  Vars
		appData:{ appName: any; versionCode: any; versionNum: any } = { appName: 'TipCalculator', versionCode: 'android', versionNum: '0.0.0' };
		year: any = null;
		_settings: tSettings = { lang_: '', theme_: 'light', cMode: false };
		themeSelect: string = 'dark';
	//#endregion
	constructor(public navCtrl: NavController, private translate: TranslateService, private glbVar: GlobalVarsService, public switchTheme: ThemeSwitcherService) { 
		this.appData.versionNum = '4.0.0';
		this.year = (new Date()).getFullYear();
	}
	async ionViewWillEnter() {
		await this.translate.setDefaultLang(this.glbVar.getLanguague());
		await this.translate.use(this.glbVar.getLanguague());
		this.glbVar.readCache('DatoSettings').then((data_: tSettings) => {
			console.log(data_); 
			this._settings = data_; 
			if(data_.theme_ == 'light') { this.themeSelect = 'dark'; }
			else { this.themeSelect = 'light'; }
		});
	}
	themeChange()   { 
		this.switchTheme.cycleTheme(); 
		if(this.themeSelect == 'light') { this.themeSelect = 'dark'; this._settings.theme_ = 'night'; }
		else { this.themeSelect = 'light';  this._settings.theme_ = 'light'; }
		this.glbVar.writeCache(this._settings, 'DatoSettings');
	}
	classicChange() {
		if(!(this._settings.cMode)) { this._settings.cMode = true; }
		else { this._settings.cMode = false; }
		this.glbVar.writeCache(this._settings, 'DatoSettings'); 
	}
	
}