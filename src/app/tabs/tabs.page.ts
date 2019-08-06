import { Component } from '@angular/core';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { tSettings } from 'src/const/variables.components';
import { NavController } from '@ionic/angular';

@Component({ selector: 'app-tabs', templateUrl: 'tabs.page.html', styleUrls: ['tabs.page.scss'] })
export class TabsPage {
    classicMode: boolean = false;
    constructor(public translate: TranslateService, private gblVar: GlobalVarsService, public navCtrl: NavController) {  }
    async ionViewWillEnter() { 
        await this.translate.setDefaultLang(this.gblVar.getLanguague());
        await this.translate.use(this.gblVar.getLanguague());
        this.gblVar.readCache('DatoSettings').then((_data: tSettings) => {
            if(_data == null) { 
                this.classicMode = false;
                this.navCtrl.navigateRoot('/tabs/tab1');
            }
            else { 
                this.classicMode = _data.cMode;
                if(this.classicMode) { this.navCtrl.navigateRoot('/tabs/tab1'); }
                else { this.navCtrl.navigateRoot('/tabs/tab2'); }
            }
        });
    }
    setClassMode(cMode_: boolean) { this.classicMode = cMode_; }
}
