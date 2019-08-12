import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ErrorMSGService {
	constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private gblVars: GlobalVarsService, private translate: TranslateService) { }
	showMSG(errorCode: string) {
		switch(errorCode) {
			case 'ExNoAmount': {
				this.translate.get('ALERT.NOAMOUNT.MSG').subscribe((msg: string) => { 
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) }); 
				}); break;
			}
			case 'ExNoCant': {
				this.translate.get('ALERT.NOCANT.MSG').subscribe((msg: string) => { 
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) }); 
				}); break;
			}
			case 'ExCMMnt': {
				this.translate.get('TOAST.MISS.MSG').subscribe((msg: string) => { this.showToastCtrl(msg); }); 
				break;
			}
			case 'ExCMDataPpl': { 
				this.translate.get('ALERT.PPL.MSG').subscribe((msg: string) => {
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) });
				}); break; 
			}
			case 'ExAMNoMeData': { 
				this.translate.get('ALERT.ME.MSG').subscribe((msg: string) => {
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) });
				}); break; 
			}
			case 'ExTipPor': {
				this.translate.get('ALERT.TIP.MSG').subscribe((msg: string) => {
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) });
				}); break;
			}
			case 'ExIUDecr' : { 
				this.translate.get('ALERT.TIP.MSG').subscribe((msg: string) => { 
					this.translate.get('ALERT.BTNS.CLOSE').subscribe((close_: string) => { this.showAlertCtrl(msg, close_) }); 
				}); break; 
			}
		}
	}
	itsComplete(iSelec: number) {
		let cnt_error: number = 0;
		if(iSelec == 0) { this.showMSG('ExTipPor'); cnt_error++;  }
		{
			let all_ppl: number = 0;
			for(let pers of this.gblVars.CachePpl.personas) { if(pers.data.length < 1  && this.gblVars.CachePpl.personas.length > 1) { all_ppl++; } }
			if(all_ppl >= this.gblVars.CachePpl.personas.length) { this.showMSG("ExCMDataPpl"); cnt_error++;  }
		}
		if(this.gblVars.CachePpl.personas[0].data.length < 1 && this.gblVars.CachePpl.personas.length < 2) { this.showMSG('ExAMNoMeData'); cnt_error++; }
		return cnt_error;
	}
	//#region MsgCtrls
		async showAlertCtrl(msg: string, close_: string) {
			const myAlert = await this.alertCtrl.create({ message: msg, buttons: [{ text: close_ }] });
			myAlert.present();
		}
		async showToastCtrl(msg: string) {
			const myToast = await this.toastCtrl.create({ message: msg, position: 'bottom', duration: 2500 }) ;
			myToast.present();
		}
	//#endregion
}