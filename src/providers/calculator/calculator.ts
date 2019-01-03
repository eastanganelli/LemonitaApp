import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorProvider {

	constructor(public http: HttpClient) {  }

	//data_: { ppParARR: Array<{ name: string; amount: number; tip: number; total: number; }>; ppEqARR: Array<{ name: string; total: number; }> }
	newModeCalc(iRange: number, iSelec: number):   {
		
	}
	oldModeCalc() {

	}
}