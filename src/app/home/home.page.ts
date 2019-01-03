import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../../const/languanges/languages.constant';

@Component({ selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'] })
export class HomePage {
	//#region Vars
	outPropina: number = 0;
	outByPeopleTip: number = 0;
	outIdiom: string = null;
	valQuality: string = null;
	dtQuality: number = 0;
	rangeValue: number = 50;
	outTotal: number = 0;
	outByPeople: number = 0;
	//#endregion
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public translate: TranslateService) {  }
	/*Fns*/
	ionViewWillEnter() {
		if (this.translate.getBrowserLang() !== undefined) {
			let deviceLang = this.translate.getBrowserLang();
			if (deviceLang === 'ca' || deviceLang === 'en' || deviceLang === 'es' || deviceLang === 'de' || deviceLang === 'pt' || deviceLang === 'fr' || deviceLang === 'it') {
				this.translate.use(this.translate.getBrowserLang());
			} else { this.translate.use(defaultLanguage); }
		} else {
			this.translate.setDefaultLang(defaultLanguage);
			this.translate.use(defaultLanguage);
		}
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
		let varPropina: number = 0;
		let varBypeople: number = 0;
		let varPagoTotal: number = 0;
		let varPagoByPeople: number = 0;
		if ((iMonto < 1 && String(iMonto) != "") || (iCant < 1 && String(iCant) != "")) {
			this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); });
		} else if (String(iMonto) == "" || String(iCant) == "" || iSelec == null) {
			this.translate.get('ALRT.TTMISS').subscribe((trTitle: string) => {
				this.translate.get('ALRT.MSGMISS').subscribe((trMsg: string) => {
					this.translate.get('ALRT.BTNCLOSE').subscribe((trBtn: string) => {
						this.showAlert(trTitle, trMsg, trBtn);
					})
				})
			})
		} else {
			let percentData = iRange;
			if (iSelec != -1) { percentData = iSelec; }
			varPropina = iMonto / 100 * percentData;
			varBypeople = varPropina / iCant;
			varPagoTotal = Number(iMonto) + Number(varPropina);
			varPagoByPeople = iMonto / iCant;

			/*Output Data*/
			this.outTotal = varPagoTotal;
			this.outByPeople = varPagoByPeople;
			this.outPropina = varPropina;
			this.outByPeopleTip = varBypeople;
		}
	}
	CheckCant(vCant: number) { if (vCant < 1 && String(vCant) != "") { this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); }); } }
}
