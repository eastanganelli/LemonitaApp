import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';
import { tPPParEq, tppArr } from '../const/variables.components';
@Injectable({ providedIn: 'root' })
export class CalculatorService {
  constructor(private gblVar: GlobalVarsService) { }
	classicMode(iMonto: number, iCant: number, iRange: number, iSelec: number) {
		let varPropina: number = 0, varBypeople: number = 0, varPagoTotal: number = 0, varPagoByPeople: number = 0;
			let percentData = iRange;
			if (iSelec != -1) { percentData = iSelec; }
			varPropina = iMonto * percentData;
			varBypeople = varPropina / iCant;
			varPagoTotal = Number(iMonto) + Number(varPropina);
			varPagoByPeople = iMonto / iCant;
			//#region Output Data
				return {
					outPropina: varPropina,
					outByPeopleTip: varBypeople,
					outTotal: varPagoTotal,
					outByPeople: varPagoByPeople
				};
			//#endregion
	}
 	advanceCalc(iRange: number, iSelec: number): tppArr {
		let percentData: number = iRange, allAmount: number = 0, ppCount_: number = 0, parTIP: number = 0;
		let arrParEq: Array<tPPParEq> = new Array(0);
		if(iSelec != (-1)) { percentData = iSelec; }
		for(let pp_ of this.gblVar.CachePpl.personas) {
			let per: tPPParEq   = { name: pp_.name_, total: 0, amount: 0, tip: 0 };
			if(pp_.data.length > 0) {
				ppCount_++;
				for(let producto of pp_.data) { per.amount += (Number)(producto.price); }
				per.total = per.amount;
				allAmount += (Number)(per.total);
				parTIP	  += (Number)(per.amount*percentData);
				per.tip   =  (Number)(per.amount*percentData);
				arrParEq.push(per);
			}
		} return {
			ppArr: arrParEq,
			data: { totalAmount: allAmount, totalTip: Number(allAmount*percentData), totalTipDiv: ((allAmount*percentData)/ppCount_), total_: (Number(allAmount) + Number(allAmount*percentData)), TipDiv: (parTIP/ppCount_) }
		};
	}
}
