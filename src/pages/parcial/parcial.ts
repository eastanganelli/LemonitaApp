import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({ selector: 'page-parcial', templateUrl: 'parcial.html', })
export class ParcialPage {
	ppArr: Array<{ name_: string; data: Array<{ name: string; price: number; }> ; }> = new Array(0);
	outPropina: number = 0;
	ppTT: number = 0;
	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
		this.ppArr.push({name_: 'Me', data: new Array(0)});
	}
	addPer() {
		let userpop = this.alertCtrl.create({
			title: 'Ingresar Nombre',
			inputs: [{ name: 'nameIN'}],
			buttons: [
				{ text: 'Cancel' },
				{ text: 'Add', role: 'add', handler: data => {this.ppArr.push({name_: data.nameIN, data: new Array(0)}); } }
			]
		});
		userpop.present();
	}
	openPer(id: number) {
		let addpop = this.alertCtrl.create({
			title: 'Consumo',
			inputs: [{ name: 'itemIN', placeholder: 'Pedido' }, { name: 'precioIN', placeholder: 'Precio' }],
			buttons: [
				{ text: 'Cancel' },
				{ text: 'Add', role: 'add', handler: data => {this.ppArr[id].data.push({name: data.itemIN, price: data.precioIN});} }
			]
		}); addpop.present();
	}
	viewPer(id: number) {
		let viewpop = this.alertCtrl.create({title: this.ppArr[id].name_, buttons: [{ text: 'Cancel' }]}); 
			let i = 0; for(let item_ of this.ppArr[id].data) { viewpop.addInput({ type: 'checkbox', label: item_.name + ' $' + item_.price, value: i.toString(), checked: false}); i++; }
		if(this.ppArr[id].data.length > 0) { 
			viewpop.addButton({ 
				text: 'Remove', role: 'rm', handler: data => { 
					if(data.length > 0) { for(let i = data.length; i > 0; i--) { this.ppArr[id].data.splice(data, 1); } } 
				}
			});
		} 
		viewpop.present();
	}
	rmPer(id: number) { this.ppArr.splice(id, 1); }
	notMe(id: number) { if(id != 0) { return false; } return true; }
}