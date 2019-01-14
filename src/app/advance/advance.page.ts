import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { tPerson, tPPPar, tPPEq, tParData, tEqData } from '../../const/variables.components';
import { CalculatorService } from '../calculator.service';
import { ErrorMSGService } from '../error-msg.service';

@Component({ selector: 'app-advance', templateUrl: 'advance.page.html', styleUrls: ['advance.page.scss'] })
export class AdvancePage {
    //#region Vars
		//#region Arrays
			ppArr: Array< tPerson > = new Array(0);
			ppParARR: Array< tPPPar > = new Array(0);
			ppEqARR: Array< tPPEq > = new Array(0);
		//#endregion
		//#region DataIN
			notCalculated: boolean = true;
			ppTT: number = 0;
			valQuality: string = null;
			rangeValue: number = 50;
			tipData_: string = 'Equal_';
		//#endregion
		//#region DataOUT
			usersNodata: boolean = false;
			equalData: tEqData;
			parcialData: tParData;
		//#endregion
	//#endregion
	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private glbVar: GlobalVarsService, private calc: CalculatorService, private alertSrvce: ErrorMSGService) {  }
	ionViewWillEnter() { this.readData(); }
	//#region pplFNs
		async addPer() {
			let userpop = await this.alertCtrl.create({
				header: 'Ingresar Nombre',
				inputs: [{ name: 'nameIN', type: 'text'}],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.push({name_: data.nameIN, data: new Array(0)}); this.saveData(); } } ]
			}); userpop.present();
		}
		async openPer(id: number) {
			let addpop = await this.alertCtrl.create({
				header: 'Consumo',
				inputs: [{ name: 'itemIN', placeholder: 'Pedido', type: 'text' }, { name: 'precioIN', placeholder: 'Precio', type: 'number' }],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr[id].data.push({name: data.itemIN, price: data.precioIN}); this.saveData(); } } ]
			}); addpop.present();
		}
		async viewPer(id: number) {
			let viewpop = null; 
			if(this.ppArr[id].data.length > 0) {
				viewpop = await this.alertCtrl.create({header: this.ppArr[id].name_, buttons: [{ text: 'Cancel' }]}); 
				let i = 0; for(let item_ of this.ppArr[id].data) { viewpop.addInput({ type: 'checkbox', label: item_.name + ' $' + item_.price, value: i.toString(), checked: false}); i++; }
				viewpop.addButton({ 
					text: 'Remove', role: 'rm', handler: data => { if(data.length > 0) { for(let i = data.length; i > 0; i--) { this.ppArr[id].data.splice(data, 1); this.saveData(); } }  }
				});
			} else { viewpop = await this.alertCtrl.create({header: this.ppArr[id].name_, message: 'No hay Insumos', buttons: [{ text: 'Cancel' }]}); } 
			viewpop.present();
		}
		rmPer(id: number) { this.ppArr.splice(id, 1); this.saveData(); }
		notMe(id: number) { if(id != 0) { return false; } return true; }
	//#endregion
	calculate(iRange: number, iSelec: number) { if(this.itsComplete(iSelec) < 1) { let m_data = this.calc.advanceCalc(iRange, iSelec); } }
	itsComplete(iSelec: number): number {
		let errCount: number = 0;
		if(iSelec == null) { this.alertSrvce.showAlertCtrl('ExTipPor'); errCount++; }
		if(this.glbVar.ppArr[0].data.length < 1 && this.glbVar.ppArr.length < 2) { this.alertSrvce.showAlertCtrl('ExAMNoMeData'); errCount++; }
		return errCount;
	}
	close() { 
		this.notCalculated = true;
		this.usersNodata = false;
		this.ppEqARR = new Array(0);
		this.ppParARR = new Array(0);
	}
	//#region cacheFNs
		readData() { this.ppArr = this.glbVar.readCache(); } 
		saveData() { if(this.ppArr[0].data.length > 0 || this.ppArr.length > 1) { this.glbVar.writeCache(this.ppArr); } }
		clearData() {
			this.ppArr = new Array(0);
			this.ppArr.push({name_: 'Me', data: new Array(0)});
			this.glbVar.clearCache(this.ppArr);
		}
	//#endregion
}