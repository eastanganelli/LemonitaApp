import { Injectable } from '@angular/core';
import { tHistory, tPerson, tPPPar, tPPEq, tParData, tEqData, tCache } from '../const/variables.components';

@Injectable({ providedIn: 'root' })
export class GlobalVarsService {
	//#region Advance
		AppLanguague: string = null;
		//#region variablesGlobales
			tempData: any = null;
			history:  Array<{ tHistory }> = new Array(0);
		//#endregion
		//#region Arrays
			CachePpl: tCache = { time_: 0, personas: new Array(0) };
			ppParARR: Array< tPPPar > = new Array(0);
			ppEqARR:  Array< tPPEq > = new Array(0);
		//#endregion
		//#region DataOUT
			usersNodata: boolean = false;
			equalData:   tEqData;
			parcialData: tParData;
		//#endregion
	//#endregion
	//#region Classic
		outPropina: 	number = 0;
		outByPeopleTip: number = 0;
		outIdiom: 		string = null;
		dtQuality: 		number = 0;
		outTotal: 		number = 0;
		outByPeople: 	number = 0;
	//#endregion
	constructor() { }
	setLanguague(Lang_: string) { this.AppLanguague = Lang_; }
	getLanguague(): string  	{ return this.AppLanguague; }
	readCache(): tCache     	{ this.tempData = JSON.parse(localStorage.getItem('DatosCache')); this.CachePpl =this.tempData; return this.tempData; }
	writeCache(in_: tCache) 	{ this.tempData = localStorage.setItem('DatosCache', JSON.stringify(in_)); this.CachePpl = in_; }
	readHistory() 				{ return this.history; }
	writeHistory(in_: tHistory) {

	}
}