//#region Imports
	import { Component } from '@angular/core';
	import { NavController, AlertController, ToastController } from '@ionic/angular';
	import { TranslateService } from '@ngx-translate/core';
	import { CalculatorService } from '../calculator.service';
	import { GlobalVarsService } from '../global-vars.service';
	import { ErrorMSGService } from '../error-msg.service';
	import { tSettings } from 'src/const/variables.components';
//#endregion
@Component({ selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'] })
export class HomePage {
	//#region Vars
		dataIn: { iMonto: number, iCant: number, iRange: number, iSelec: number } = {
			iMonto: 0, 
			iCant: 0, 
			iRange: 50, 
			iSelec: 0
		}
		dataOut: { outPropina: number, outByPeopleTip: number, outTotal: number, outByPeople: number } = {
			outPropina: 0,
			outByPeopleTip: 0,
			outTotal: 0,
			outByPeople: 0
		}
		theme_: string = null;
	//#endregion
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public translate: TranslateService, private calc: CalculatorService, private errMsg: ErrorMSGService, private gblVar: GlobalVarsService) {  }
	/*Fns*/
	async ionViewWillEnter() {
		await this.translate.setDefaultLang(this.gblVar.getLanguague());
		await this.translate.use(this.gblVar.getLanguague());
		await this.gblVar.readCache('DatoSettings').then((data_: tSettings) => { this.theme_ = data_.theme_; });
	}
	async mathProp(iMonto: number, iCant: number, iRange: number, iSelec: number) {
		if((String(iMonto) != '' && iMonto > 0) && (String(iCant) != '' && iCant > 0) && iSelec != 0) { this.dataOut = this.calc.classicMode(iMonto, iCant, iRange/100, iSelec); }
		else { 
			if(iSelec == 0)  		 { await this.errMsg.showMSG('ExTipPor'); }
			if(String(iCant)  == '') { await this.errMsg.showMSG('ExNoCant'); }
			if(String(iMonto) == '') { await this.errMsg.showMSG('ExNoAmount'); }
		}
	}
	CheckCant(vCant: number) { if (vCant < 1 && String(vCant) != "") { this.errMsg.showMSG('ExCMMnt'); } }
	setTheme(Theme_: string) { this.theme_ = Theme_; }
}