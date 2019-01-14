import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ErrorMSGService {

	constructor(private alertCtrl: AlertController) { }
	showAlertCtrl(errorCode: string) {
		switch(errorCode) {
			case 'ExCMMnt': {

			}
			case 'ExCMCntPpl': {
				
			}
			case 'Ex': {
				
			}
			case 'ExTipPor': {
				
			}
			// case 'Ex': {
				
			// }
		}
	}
}