import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tHistory, tPerson } from '../../components/variables.components';

@Injectable()
export class GlobalVarsProvider {
    //#region variablesGlobales
    tempData: any = null;
    history: Array<{ tHistory }> = new Array(0);
    //#endregion
    constructor(public http: HttpClient) { }
    readCache() { return JSON.parse(localStorage.getItem('DatosCache')); }
    writeCache(in_: Array< tPerson >) { this.tempData = localStorage.setItem('DatosCache', JSON.stringify(in_));; }
    clearCache(in_: Array< tPerson >) { this.tempData = localStorage.setItem('DatosCache', JSON.stringify(in_)); }

    readHistory() { return this.history; }
    writeHistory(in_: tHistory ) {
        
    }
    updateHistory(in_: tHistory ) {

    }
}