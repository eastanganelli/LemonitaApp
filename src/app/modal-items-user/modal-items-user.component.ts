import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { tItem } from 'src/const/variables.components';
import { ErrorMSGService } from '../error-msg.service';

@Component({ selector: 'app-modal-items-user', templateUrl: './modal-items-user.component.html', styleUrls: ['./modal-items-user.component.scss'] })
export class ModalItemsUserComponent {
	userID_: number;
	mod_: 	 string = 'modList';
	myItems: Array<tItem> = new Array(0);
	constructor(private navParams: NavParams, private glbVar: GlobalVarsService, private modalCtrl: ModalController, private errCtrl: ErrorMSGService) { this.readItems(); }
	incremental(id_: number) { this.myItems[id_].count++; this.update(); }
	decremental(id_: number) {
		if(this.myItems[id_].count > 1) { this.myItems[id_].count--; }
		else { this.errCtrl.showAlertCtrl("ExIUDecr"); }
		this.update();
	}
	itemRemove(id_: number) { this.myItems.splice(id_, 1); this.update(); }
	addProducto(nomProd: string, preProd: number) 	  { this.myItems.push({ name: nomProd, count: 1, price: preProd }); this.update(); }
	readItems() 			{ 
		this.userID_ = this.navParams.get('userID');
		this.mod_ 	 = this.navParams.get('tipo_');
		this.myItems = this.glbVar.CachePpl.personas[this.userID_].data; 
	}
	update() 	{ this.glbVar.updateCache(this.userID_, this.myItems); }
	priceXcount(precio: number, cant: number): number { return precio*cant; }
	meClose() { this.modalCtrl.dismiss(); }
}
