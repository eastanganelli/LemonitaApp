import { AlertController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../../const/languanges/languages.constant';

@Component({selector:'page-home', templateUrl:'home.html'})
export class HomePage{
	//#region Vars
		outPropina: number = 0;
		outBypeople: number = 0;
		outIdiom: string = null;
		valQuality: string = null;
		dtQuality: number = 0;
		rangeValue: number = 50;
	//#endregion
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public translate: TranslateService){ this.iniTrans(); }
	/*Fns*/
		/*MsgControllers*/
			showAlert(vTitle:string, vSubtitle:string, vButton:string){
		   	let alert = this.alertCtrl.create({ title: vTitle, subTitle: vSubtitle + '.', buttons: [vButton] });
		   	alert.present();
		  	}
		  	showToaster(vString:string){
		  		let toaster = this.toastCtrl.create({ message: vString, position: 'bottom', duration: 2500 }); 
		  		toaster.present();
		  	}
		//#region Ini
		iniTrans(){
			if(this.translate.getBrowserLang()!==undefined){
			 	let deviceLang = this.translate.getBrowserLang();
				if(deviceLang === 'ca' || deviceLang === 'en' || deviceLang === 'es' || deviceLang === 'de' || deviceLang === 'pt' || deviceLang === 'fr' || deviceLang === 'it') this.translate.use(this.translate.getBrowserLang());
				else this.translate.use(defaultLanguage);
			} else {
				this.translate.setDefaultLang(defaultLanguage);
				this.translate.use(defaultLanguage);
			}
		}
		//#endregion
		mathProp(iMonto:number, iCant:number, iRange:number, iSelec:number){
			//#region Vars
			let varPropina: number;
			let varBypeople:number;
			//#endregion
			if((iMonto < 1 && String(iMonto) != "" ) || (iCant < 1 && String(iCant) != "")) { this.translate.get('TST.MSGMISS').subscribe((trText:string)=>{ this.showToaster(trText); }); } 
			else if (String(iMonto) == "" || String(iCant) == "" || iSelec == null){
				this.translate.get('ALRT.TTMISS').subscribe((trTitle:string) => {
					this.translate.get('ALRT.MSGMISS').subscribe((trMsg:string) => {
						this.translate.get('ALRT.BTNCLOSE').subscribe((trBtn:string) => { this.showAlert(trTitle,trMsg,trBtn); });
					});
				});
			} else {
				let percentData = iRange;
				if(iSelec != (-1)) { percentData = iSelec; }
				varPropina = iMonto/100*percentData;
				varBypeople = varPropina/iCant;
				//#region Output Data
					this.outPropina = varPropina;
					this.outBypeople = varBypeople;
				//#endregion
			}
		}
		CheckCant(vCant:number){ if(vCant < 1 && String(vCant) != ""){ this.translate.get('TST.MSGMISS').subscribe((trText:string)=>{ this.showToaster(trText); }); } }
}