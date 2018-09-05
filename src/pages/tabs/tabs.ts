import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ParcialPage } from '../parcial/parcial';
import { HistoryPage } from './../history/history';

@IonicPage()
@Component({ selector: 'page-tabs', templateUrl: 'tabs.html', })
export class TabsPage {
	homepg = HomePage;
	parcialpg = ParcialPage;
	historypg = HistoryPage;
	constructor(public navCtrl: NavController, public navParams: NavParams) {  }
}