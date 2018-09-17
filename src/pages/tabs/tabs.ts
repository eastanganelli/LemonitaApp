import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewModePage } from '../newmode/newmode';
import { HistoryPage } from './../history/history';

@Component({ selector: 'page-tabs', templateUrl: 'tabs.html', })
export class TabsPage {
	parcialpg = NewModePage;
	historypg = HistoryPage;
	constructor(public navCtrl: NavController, public navParams: NavParams) {  }
}