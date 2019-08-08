import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ErrorMSGService {

	constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private gblVars: GlobalVarsService, private translate: TranslateService) { }
	async showAlertCtrl(errorCode: string) {
		let myAlert, myToast;
		switch(errorCode) {
			case 'ExCMMnt': {
				await this.translate.get('TOAST.MISS.MSG').subscribe((msg: string) => {
					myToast = this.toastCtrl.create({ message: msg, position: 'bottom', duration: 2500 }) ;
				});
				myToast.present(); break;
			}
			case 'ExCMDataPpl': { 
				await this.translate.get('ALERT.PPL.TTL').subscribe((titulo: string) => {
					this.translate.get('ALERT.PPL.MSG').subscribe((msg: string) => {
						this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => {
							myAlert =  this.alertCtrl.create({ message: msg, buttons: [{ text: close_ }] });
						});
					});
				});
				await myAlert.present(); break; 
			}
			case 'ExAMNoMeData': {  break; }
			case 'ExTipPor': {
				this.translate.get('ALERT.TIP.TTL').subscribe((titulo_: string) => {
					this.translate.get('ALERT.TIP.MSG').subscribe((msg: string) => {
						this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => {
							myAlert = this.alertCtrl.create({ message: msg, buttons: [{ text: close_ }] });
						});
					});
				});
				await myAlert.present(); break;
			}
			// case 'Ex': {
			//		break;	
			// }
			case 'ExIUDecr' : { 
				this.translate.get('ALERT.TIP.TTL').subscribe((titulo_: string) => {
					this.translate.get('ALERT.TIP.MSG').subscribe((msg: string) => {
						this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => {
							myAlert = this.alertCtrl.create({ message: msg, buttons: [{ text: close_ }] });
						});
					});
				});
				await myAlert.present(); break; 
			}
		}
	}
	itsComplete(iSelec: number) {
		let cnt_error: number = 0;
		if(iSelec == 0) { this.showAlertCtrl('ExTipPor'); cnt_error++;  }
		{
			let all_ppl: number = 0;
			for(let pers of this.gblVars.CachePpl.personas) { if(pers.data.length < 1  && this.gblVars.CachePpl.personas.length > 1) { all_ppl++; } }
			if(all_ppl >= this.gblVars.CachePpl.personas.length) { this.showAlertCtrl("ExCMDataPpl"); cnt_error++;  }
		}
		if(this.gblVars.CachePpl.personas[0].data.length < 1 && this.gblVars.CachePpl.personas.length < 2) { this.showAlertCtrl('ExAMNoMeData'); cnt_error++; }
		return cnt_error;
	}
}