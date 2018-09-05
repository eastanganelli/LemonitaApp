import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({ selector: 'modal-user', templateUrl: 'modal-user.html' })
export class ModalUserComponent {
	userItems: Array<{ name: string; price: number }> = new Array(0);
	constructor(private navCtrl: NavController, private navParams: NavParams) { 
		this.navParams.get('userData');
	}
	ionViewWillLeave() {
		
	}
	dismiss() { this.navCtrl.pop(); }
}
