import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../../const/languanges/languages.constant';
import { CalculatorService } from '../calculator.service';
import { GlobalVarsService } from '../global-vars.service';

@Component({ selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'] })
export class HomePage {
	//#region Vars
		dataIn: { iMonto: number, iCant: number, iRange: number, iSelec: number } = {
			iMonto: 0, 
			iCant: 0, 
			iRange: 0, 
			iSelec: 0
		}
		dataOut: { outPropina: number, outByPeopleTip: number, outTotal: number, outByPeople: number } = {
			outPropina: 0,
			outByPeopleTip: 0,
			outTotal: 0,
			outByPeople: 0
		}
	//#endregion
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public translate: TranslateService, private calc: CalculatorService, private gblVar: GlobalVarsService) {  }
	/*Fns*/
	async ionViewWillEnter() {
		await this.translate.setDefaultLang(this.gblVar.getLanguague());
		await this.translate.use(this.gblVar.getLanguague());
	}
	/*MsgControllers*/
	async showAlert(vTitle: string, vSubtitle: string, vButton: string) {
		let alert = await this.alertCtrl.create({ header: vTitle, subHeader: vSubtitle + '.', buttons: [vButton] });
		await alert.present();
	}
	async showToaster(vString: string) {
		var toaster = await this.toastCtrl.create({ message: vString, position: 'bottom', duration: 2500 });
		await toaster.present();
	}
	mathProp(iMonto: number, iCant: number, iRange: number, iSelec: number) {
		this.dataOut = this.calc.classicMode(iMonto, iCant, iRange, iSelec);
		// if ((iMonto < 1 && String(iMonto) != "") || (iCant < 1 && String(iCant) != "")) {
		// 	this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); });
		// } else if (String(iMonto) == "" || String(iCant) == "" || iSelec == null) {
		// 	this.translate.get('ALRT.TTMISS').subscribe((trTitle: string) => {
		// 		this.translate.get('ALRT.MSGMISS').subscribe((trMsg: string) => {
		// 			this.translate.get('ALRT.BTNCLOSE').subscribe((trBtn: string) => {
		// 				this.showAlert(trTitle, trMsg, trBtn);
		// 			})
		// 		})
		// 	})
		// } else {
		// 
		// }
	}
	CheckCant(vCant: number) { if (vCant < 1 && String(vCant) != "") { this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); }); } }
}
