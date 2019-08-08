import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { tPPPar, tPPEq, tCache, tPerson, tSettings } from '../../const/variables.components';
import { TranslateService } from '@ngx-translate/core';
import { CalculatorService } from '../calculator.service';
import { ErrorMSGService } from '../error-msg.service';
import { ModalItemsUserComponent } from '../modal-items-user/modal-items-user.component';

@Component({ selector: 'app-advance', templateUrl: 'advance.page.html', styleUrls: ['advance.page.scss'] })
export class AdvancePage {
    //#region Vars
		//#region Arrays
			ppArr: 	  tCache = { time_: 0, personas: new Array(0) };
			ppParARR: Array<tPPPar> = new Array(0);
			ppEqARR:  Array<tPPEq> = new Array(0);
		//#endregion
		//#region DataIN
			notCalculated: 	boolean = true;
			ppTT: 			number = 0;
			valQuality: 	number = 0;
			rangeValue: 	number = 50;
			tipData_:   	string = 'Equal_';
		//#endregion
		//#region 
			limTime: 		number = 21600000;
		//#endregion
		theme_: string = null;
	//#endregion
	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private modalCtrl: ModalController, private translate: TranslateService, public gblVar: GlobalVarsService, public calc: CalculatorService, private alertSrvce: ErrorMSGService) { /* this.readData(); */ }
	async ionViewWillEnter() {
		this.readData(); 
		await this.translate.setDefaultLang(this.gblVar.getLanguague());
		await this.translate.use(this.gblVar.getLanguague());
		await this.gblVar.readCache('DatoSettings').then((data_: tSettings) => { this.theme_ = data_.theme_; });
	}
	setTheme(Theme_: string) { this.theme_ = Theme_; }
	//#region pplFNs
		async addPer() {
			let userpop = await this.alertCtrl.create({
				header: 'Ingresar Nombre',
				inputs: [{ name: 'nameIN', type: 'text'}],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.personas.push({ name_: data.nameIN, data: new Array(0) } ); this.saveData(); } } ]
			}); userpop.present();
		}
		async openPer(id_: number) {
			const modalItemByUser = await this.modalCtrl.create({ component: ModalItemsUserComponent, componentProps: { userID: id_, tipo_: 'modList' } });
			modalItemByUser.onDidDismiss().then(() => { this.readData(); });
			await modalItemByUser.present();
		}
		rmPer(id: number) { this.ppArr.personas.splice(id, 1); this.saveData(); }
		notMe(id: number) { if(id != 0) { return false; } return true; }
	//#endregion
	//#region FN
		calculate(iRange: number, iSelec: number) { 
			if(this.alertSrvce.itsComplete(iSelec) == 0) { 
				let m_data: any = this.calc.advanceCalc(iRange/100, iSelec);
				this.notCalculated = false;
			} 
		}
		close() { 
			this.notCalculated = true;
			this.ppEqARR 	   = new Array(0);
			this.ppParARR 	   = new Array(0);
		} 
	//#endregion
	//#region cacheFNs
		readData() { 
			this.gblVar.readCache('DatosCache').then((data: tCache) => {
				if(data != null) {
					const actual_time = ((new Date()).getTime()) - this.limTime; //21600000
					//Hacer un Alert que pregunte si quiere guardar o borrar
					if(data.time_ < actual_time) { this.clearData(); }
					else { this.ppArr = data; }				
				} else { this.clearData(); }
			});
		}
		saveData() { this.gblVar.writeCache(this.ppArr, 'DatosCache'); this.close(); }
		clearData() {
			let aux_per: Array<tPerson> = new Array(0);
			this.ppArr = { time_: (new Date()).getTime(), personas: aux_per };
			this.ppArr.personas.push({ name_: 'Me', data: new Array(0) }),
			this.gblVar.writeCache(this.ppArr, 'DatosCache');
		}
	//#endregion
}