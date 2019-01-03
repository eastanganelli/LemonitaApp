//#region Plugins
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//#endregion
//#region Pages
import { HomePage } from '../home/home';
import { NewModePage } from '../newmode/newmode';
import { HistoryPage } from './../history/history';
//#endregion

@Component({ selector: 'page-tabs', templateUrl: 'tabs.html', })
export class TabsPage {
	//#region Variables
		public showHidemode: boolean = true;
	//#endregion
	//#region Pages
		oldmode = HomePage;
		newmode = NewModePage;
		historypg = HistoryPage;
	//#endregion
	constructor(public navCtrl: NavController, public navParams: NavParams) { 
		//this.showHidemode = this.navParams.get('mode_');
	}
	checkMenu(Type_: string): void {
		switch(Type_) {
			case 'oldmode': {
				this.showHidemode = false;
				break;
			}
			case 'newmode': {
				this.showHidemode = true;
				break;
			}
		}
	}
}