import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';
import { tPPPar, tPPEq } from '../const/variables.components';

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
 	advanceCalc(iRange: number, iSelec: number) {
		this.clearPParr();
		let percentData: number = iRange, allAmount: number = 0, ppCount_: number = 0, parTIP: number = 0;
		if(iSelec != (-1)) { percentData = iSelec; }
		for(let pp_ of this.gblVar.CachePpl.personas) {
			let perEq: tPPEq   = { name: pp_.name_, total: 0 };
			let perPar: tPPPar = { name: pp_.name_, amount: 0, tip: 0, total: 0 };
			if(pp_.data.length > 0) {
				ppCount_++;
				for(let producto of pp_.data) {
					perEq.total   += (Number)(producto.price);
					perPar.amount += (Number)(producto.price);
				}
				{
					allAmount  	 += (Number)(perEq.total);
					parTIP	   	 += (Number)(perPar.amount*percentData);
					perPar.tip   =  (Number)(perPar.amount*percentData);
					perPar.total =  (Number)(perPar.amount + perPar.tip);
					this.gblVar.ppEqARR.push(perEq);
					this.gblVar.ppParARR.push(perPar);
				}
			}
		} this.gblVar.equalData   = { totalAmount: allAmount, totalTip: Number(allAmount*percentData), totalTipDiv: ((allAmount*percentData)/ppCount_), total_: (Number(allAmount) + Number(allAmount*percentData)) };
		this.gblVar.parcialData = { totalAmount: allAmount, totalTip: parTIP, total_: (allAmount + parTIP), TipEqDiv: (parTIP/ppCount_) };
	}
	clearPParr() {
		this.gblVar.ppEqARR 	= new Array(0);
		this.gblVar.ppParARR 	= new Array(0);
		this.gblVar.equalData   = { totalAmount: 0, totalTip: 0, totalTipDiv: 0, total_: 0 };
		this.gblVar.parcialData = { totalAmount: 0, totalTip: 0, total_: 0, TipEqDiv: 0 }; 
	}
}
