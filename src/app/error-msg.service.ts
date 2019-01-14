import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ErrorMSGService {

	constructor(private alertCtrl: AlertController) { }
	showAlertCtrl(errorCode: string) {
		switch(errorCode) {
			case 'ExCMMnt': {
				//this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); });
			}
			case 'ExCMCntPpl': {
				
			}
			case 'ExAMNoMeData': {
				
			}
			case 'ExTipPor': {
				
			}
			// case 'Ex': {
				
			// }
		}
	}
}