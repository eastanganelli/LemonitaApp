import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CalculatorService } from '../calculator.service';
import { GlobalVarsService } from '../global-vars.service';
import { ErrorMSGService } from '../error-msg.service';

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
	//#endregion
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public translate: TranslateService, private calc: CalculatorService, private gblVar: GlobalVarsService, private errMsg: ErrorMSGService) {  }
	/*Fns*/
	async ionViewWillEnter() {
		await this.translate.setDefaultLang(this.gblVar.getLanguague());
		await this.translate.use(this.gblVar.getLanguague());
	}
	mathProp(iMonto: number, iCant: number, iRange: number, iSelec: number) { this.dataOut = this.calc.classicMode(iMonto, iCant, iRange/100, iSelec); }
	CheckCant(vCant: number) { if (vCant < 1 && String(vCant) != "") { /* alert('me'); this.errMsg.showAlertCtrl('ExCMMnt'); */ } }
}