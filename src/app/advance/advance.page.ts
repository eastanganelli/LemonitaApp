import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { tPPPar, tPPEq, tCache, tPerson } from '../../const/variables.components';
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
	//#endregion
	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private modalCtrl: ModalController, private glbVar: GlobalVarsService, private calc: CalculatorService, private alertSrvce: ErrorMSGService) {  }
	ionViewWillEnter() { this.readData(); }
	//#region pplFNs
		async addPer() {
			let userpop = await this.alertCtrl.create({
				header: 'Ingresar Nombre',
				inputs: [{ name: 'nameIN', type: 'text'}],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.personas.push({ name_: data.nameIN, data: new Array(0) } ); this.saveData(); } } ]
			}); userpop.present();
		}
		/* async openPer(id: number) {
			let addpop = await this.alertCtrl.create({
				header: 'Consumo',
				inputs: [{ name: 'itemIN', placeholder: 'Pedido', type: 'text' }, { name: 'precioIN', placeholder: 'Precio', type: 'number' }],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.personas[id].data.push({name: data.itemIN, count: 1, price: data.precioIN}); this.saveData(); } } ]
			}); addpop.present();
		} */
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
				let m_data: any = this.calc.advanceCalc(iRange, iSelec);
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
			//#region Var
				let temp_data 	= this.glbVar.readCache(); console.log(temp_data);
				let sum 	  	= (temp_data.time_/1000) + 21600;
				let actual_time = ((new Date()).getTime())/1000;
			//#endregion
			if(sum > actual_time) { console.log(true); this.ppArr = temp_data; }
			else {  console.log(false); this.clearData(); }
		}
		saveData() { this.glbVar.writeCache(this.ppArr); }
		clearData() {
			let aux_per: Array<tPerson> = new Array(0);
			this.ppArr = { time_: (new Date()).getTime(), personas: aux_per };
			this.ppArr.personas.push({ name_: 'Me', data: new Array(0) }),
			this.glbVar.writeCache(this.ppArr);
		}
	//#endregion
}