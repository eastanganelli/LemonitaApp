import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalVarsService } from './global-vars.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ErrorMSGService {

	constructor(private alertCtrl: AlertController, private gblVars: GlobalVarsService, private translate: TranslateService) { }
	async showAlertCtrl(errorCode: string) {
		let myAlert;
		switch(errorCode) {
			case 'ExCMMnt': {
				//this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); }); await myAlert.present();
			}
			case 'ExCMDataPpl': { myAlert = await this.alertCtrl.create({ header: "People", message: "Las personas no tienen datos cargados para calcular", buttons: [{ text: "Cerrar" }] }); await myAlert.present(); }
			case 'ExAMNoMeData': {
				
			}
			case 'ExTipPor': { myAlert = await this.alertCtrl.create({ header: "Propina", message: "No se selecciona el porcentaje", buttons: [{ text: "Cerrar" }] }); await myAlert.present(); }
			// case 'Ex': {
				
			// }
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