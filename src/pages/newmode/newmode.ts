import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { tPerson, tPPPar, tPPEq, tParData, tEqData } from '../../components/variables.components';

@Component({ selector: 'page-newmode', templateUrl: 'newmode.html', })
export class NewModePage {
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
	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private glbVar: GlobalVarsProvider) { this.ppArr.push({name_: 'Me', data: new Array(0)}); }
	ionViewWillEnter() { this.readData(); }
	//#region pplFNs
		addPer() {
			let userpop = this.alertCtrl.create({
				title: 'Ingresar Nombre',
				inputs: [{ name: 'nameIN', type: 'text'}],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.push({name_: data.nameIN, data: new Array(0)}); this.saveData(); } } ]
			}); userpop.present();
		}
		openPer(id: number) {
			let addpop = this.alertCtrl.create({
				title: 'Consumo',
				inputs: [{ name: 'itemIN', placeholder: 'Pedido', type: 'text' }, { name: 'precioIN', placeholder: 'Precio', type: 'number' }],
				buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr[id].data.push({name: data.itemIN, price: data.precioIN}); this.saveData(); } } ]
			}); addpop.present();
		}
		viewPer(id: number) {
			let viewpop = null; 
			if(this.ppArr[id].data.length > 0) {
				viewpop = this.alertCtrl.create({title: this.ppArr[id].name_, buttons: [{ text: 'Cancel' }]}); 
				let i = 0; for(let item_ of this.ppArr[id].data) { viewpop.addInput({ type: 'checkbox', label: item_.name + ' $' + item_.price, value: i.toString(), checked: false}); i++; }
				viewpop.addButton({ 
					text: 'Remove', role: 'rm', handler: data => { if(data.length > 0) { for(let i = data.length; i > 0; i--) { this.ppArr[id].data.splice(data, 1); this.saveData(); } }  }
				});
			} else { viewpop = this.alertCtrl.create({title: this.ppArr[id].name_, message: 'No hay Insumos', buttons: [{ text: 'Cancel' }]}); } 
			viewpop.present();
		}
		rmPer(id: number) { this.ppArr.splice(id, 1); this.saveData(); }
		notMe(id: number) { if(id != 0) { return false; } return true; }
	//#endregion
	calculate(iRange: number, iSelec: number) {
		if(this.itsComplete(iSelec).length < 1) {
			this.notCalculated = false;
			let percentData: number = iRange/100; let ppCount_: number = 0;
			if(iSelec != (-1)) { percentData = iSelec; }
			let allAmount: number = 0/*, eqTIP: number = 0*/, parTIP: number = 0/*, eqTotal: number = 0, parTotal: number = 0*/;
			for(let pp_ of this.ppArr) {
				if(pp_.data.length > 0) {
					ppCount_++;
					//#region Vars
					let ppParARR: { name: string; amount: number; tip: number; total: number; } = { name: pp_.name_, amount: 0, tip: 0, total: 0 };
					let ppEqARR: { name: string; total: number; } = { name: pp_.name_, total: 0 };
					let amount_: number = 0;
					//#endregion
					for(let csmp_ of pp_.data) { amount_ = Number(Number(amount_) + Number(csmp_.price)); }
					//#region Data Record
						//#region Parcial
							ppParARR.amount = amount_; 
							ppParARR.tip = Number(amount_*percentData); 
							ppParARR.total = (Number(amount_) + Number(ppParARR.tip));
						//Total Parcial
							parTIP = Number(Number(parTIP) + Number(amount_*percentData));
						//#endregion
						//Equal
							ppEqARR.total = Number(amount_);
						//For All
							allAmount = Number(Number(allAmount) + Number(amount_));
					//#endregion
					//#region Push data
						this.ppParARR.push(ppParARR);
						this.ppEqARR.push(ppEqARR);
					//#endregion
				} else { this.usersNodata = true; }
			} 
			//#region Equal Total
				this.equalData = { 
					totalAmount: allAmount, 
					totalTip: Number(allAmount*percentData), 
					totalTipDiv: ((allAmount*percentData)/ppCount_), 
					total_: (Number(allAmount) + Number(allAmount*percentData)) 
				};
			//#endregion
			//#region ParTotal
				this.parcialData = { 
					totalAmount: allAmount, 
					totalTip: parTIP, 
					total_: (allAmount + parTIP),
					TipEqDiv: (parTIP/ppCount_)
				};
			//#endregion
		} //else { alert('Falta data'); }
	}
	itsComplete(iSelec: number): Array<{ code_: string; }> {
		let errArr: Array<{ code_: string; }> = new Array(0);
		if(iSelec == null) { errArr.push({ code_: '1xQuality' }); }
		if(this.ppArr[0].data.length < 1 && this.ppArr.length < 2) { errArr.push({ code_: '1xNoMeData' }); }
		return errArr;
	}
	close() { 
		this.notCalculated = true;
		this.usersNodata = false;
		this.ppEqARR = new Array(0);
		this.ppParARR = new Array(0);
	}
	/* oldModeEnable() { this.navCtrl.setRoot(TabsPage, { mode_: true }); } */
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