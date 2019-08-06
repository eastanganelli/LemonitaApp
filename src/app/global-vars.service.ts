import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { tHistory, tPPPar, tPPEq, tParData, tEqData, tCache, tItem } from '../const/variables.components';

@Injectable({ providedIn: 'root' })
export class GlobalVarsService {
	//#region Advance
		AppLanguague: string = null;
		//#region variablesGlobales
			tempData: any = null;
			history:  Array<{ tHistory }> = new Array(0);
			settings: any = null;
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
	constructor(private storage: Storage) { }
	setLanguague(Lang_: string) { this.AppLanguague = Lang_; }
	getLanguague(): string  	{ return this.AppLanguague; }
	readCache(tipo_: string)	{ 
		return new Promise<any>((resolve) => {
			switch(tipo_) {
				case 'DatosCache':    { this.storage.get(tipo_).then(data => { this.tempData = data; this.CachePpl = this.tempData; resolve(data)}); break; }
				case 'DatoHistorial': { this.storage.get(tipo_).then(data => { this.history  = data; resolve(data)}); break; }
				case 'DatoSettings':  { this.storage.get(tipo_).then(data => { this.settings = data; resolve(data)}); break; }
			} 
		});
	}
	writeCache(in_: any, tipo_: string) {
		console.log(in_); 
		switch(tipo_) {
			case 'DatosCache':    { this.storage.set(tipo_, in_); this.CachePpl = in_; break; }
			case 'DatoHistorial': { this.storage.set(tipo_, in_); this.history  = in_; break; }
			case 'DatoSettings':  { this.storage.set(tipo_, in_); this.settings = in_; break; }
		} 
	}
	updateCache(id_: number, data_: any, tipo_: string) {
		switch(tipo_) { case 'DatosCache':    { this.CachePpl.personas[id_].data = data_; this.writeCache(this.CachePpl, tipo_); break; } }  
	}
}
