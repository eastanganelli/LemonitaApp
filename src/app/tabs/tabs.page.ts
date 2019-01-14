import { Component } from '@angular/core';
import { GlobalVarsService } from '../global-vars.service';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from '../../const/languanges/languages.constant';

@Component({ selector: 'app-tabs', templateUrl: 'tabs.page.html', styleUrls: ['tabs.page.scss'] })
export class TabsPage {
    constructor( public translate: TranslateService, private gblVar: GlobalVarsService) {  }
    ionViewWillEnter() {
        
    }    
}
