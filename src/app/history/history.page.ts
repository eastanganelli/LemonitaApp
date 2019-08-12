import { Component } from '@angular/core';
import { tHistory } from 'src/const/variables.components';
import { GlobalVarsService } from '../global-vars.service';
@Component({ selector: 'app-history', templateUrl: 'history.page.html', styleUrls: ['history.page.scss'] })
export class HistoryPage {
    //History: tHistory = null;
    History: tHistory = null;
    constructor(private gblVars: GlobalVarsService) {
        
    } 
    async ionViewWillEnter() {
        await this.gblVars.readCache('DatoHistorial').then((data_: tHistory) => {
            console.log(data_)
        });
    }
}