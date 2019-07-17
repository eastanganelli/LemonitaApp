import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';


@Component({ selector: 'app-settings', templateUrl: 'settings.page.html', styleUrls: ['settings.page.scss'] })
export class SettingsPage {

	constructor(public navCtrl: NavController) {  }
	
}