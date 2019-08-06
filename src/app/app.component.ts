import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../const/languanges/languages.constant';
import { ThemeSwitcherService } from './theme-switcher.service';
import { tSettings } from 'src/const/variables.components';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private translate: TranslateService, private theme: ThemeSwitcherService, private gblVar: GlobalVarsService) { this.initializeApp(); }
	initializeApp() {
		this.platform.ready().then(() => {
			//#region splashScr and statusbar
				this.statusBar.styleDefault();
				this.splashScreen.hide();
			//#endregion
			//#region TRANSLATE
				if (this.translate.getBrowserLang() !== undefined) {
					let deviceLang = this.translate.getBrowserLang();
					if (deviceLang === 'ca' || deviceLang === 'en' || deviceLang === 'es' || deviceLang === 'de' || deviceLang === 'pt' || deviceLang === 'fr' || deviceLang === 'it') { 
						this.gblVar.setLanguague(deviceLang); 
					} else { this.gblVar.setLanguague(defaultLanguage); }
				} else { this.gblVar.setLanguague(defaultLanguage); }
			//#endregion
			//#region loadSettings
				this.gblVar.readCache('DatoSettings').then((_data: tSettings) => {
					console.log(_data);
					if(_data == null) { 
						this.gblVar.writeCache({ lang_: ' ', theme_: 'light', cMode: false }, 'DatoSettings');
						this.theme.setTheme('light');
					} else { this.theme.setTheme(_data.theme_); }
				});
			//#endregion
		});
	}
}




