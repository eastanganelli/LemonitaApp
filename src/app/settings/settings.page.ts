import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeSwitcherService } from '../theme-switcher.service';
import { tSettings } from 'src/const/variables.components';
import { TabsPage } from '../tabs/tabs.page';

@Component({ selector: 'app-settings', templateUrl: 'settings.page.html', styleUrls: ['settings.page.scss'] })
export class SettingsPage {
	//#region  Vars
		appData:{ appName: any; versionCode: any; versionNum: any } = { appName: 'TipCalculator', versionCode: 'android', versionNum: '0.0.0' };
		year: any = null;
		_settings: tSettings = { lang_: '', theme_: 'light', cMode: false };
	//#endregion
	constructor(public navCtrl: NavController, private translate: TranslateService, private glbVar: GlobalVarsService, public switchTheme: ThemeSwitcherService, private tabChange: TabsPage) { 
		this.appData.versionNum = '4.0.0';
		this.year = (new Date()).getFullYear();
		this.glbVar.readCache('DatoSettings').then((data_: tSettings) => { this._settings = data_; });
	}
	async ionViewWillEnter() {
		await this.translate.setDefaultLang(this.glbVar.getLanguague());
		await this.translate.use(this.glbVar.getLanguague());
	}
	themeChange()   {
		if(this._settings.theme_ == 'light') { this._settings.theme_ = 'night'; }
		else if(this._settings.theme_ == 'night') { this._settings.theme_ = 'light'; }
		this.glbVar.writeCache(this._settings, 'DatoSettings');
		this.switchTheme.setTheme(this._settings.theme_);
		this.tabChange.setTheme(this._settings.theme_);
	}
	classicChange() {
		if(!(this._settings.cMode)) { this._settings.cMode = true; }
		else { this._settings.cMode = false; }
		this.glbVar.writeCache(this._settings, 'DatoSettings');
		this.tabChange.setClassMode(this._settings.cMode);
	}
}