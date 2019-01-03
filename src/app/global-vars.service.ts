import { Injectable } from '@angular/core';
import { tHistory, tPerson, tPPPar, tPPEq, tParData, tEqData } from '../const/variables.components';

@Injectable({ providedIn: 'root' })
export class GlobalVarsService {
	//#region Advance
		//#region variablesGlobales
			tempData: any = null;
			history: Array<{ tHistory }> = new Array(0);
		//#endregion
		//#region Arrays
			ppArr: Array< tPerson > = new Array(0);
			ppParARR: Array< tPPPar > = new Array(0);
			ppEqARR: Array< tPPEq > = new Array(0);
		//#endregion
		//#region DataIN
			notCalculated: boolean = true;
			ppTT: number = 0;
			valQuality: string = null;
			rangeValue: number = 50;
			tipData_: string = 'Equal_';
		//#endregion
		//#region DataOUT
			usersNodata: boolean = false;
			equalData: tEqData;
			parcialData: tParData;
		//#endregion
	//#endregion
	//#region Classic
		outPropina: number = 0;
		outByPeopleTip: number = 0;
		outIdiom: string = null;
		dtQuality: number = 0;
		outTotal: number = 0;
		outByPeople: number = 0;
	//#endregion
	constructor() { }
	readCache() { return JSON.parse(localStorage.getItem('DatosCache')); }
	writeCache(in_: Array<tPerson>) { this.tempData = localStorage.setItem('DatosCache', JSON.stringify(in_));; }
	clearCache(in_: Array<tPerson>) { this.tempData = localStorage.setItem('DatosCache', JSON.stringify(in_)); }
	readHistory() { return this.history; }
	writeHistory(in_: tHistory) {

	}
	updateHistory(in_: tHistory) {

	}
}
