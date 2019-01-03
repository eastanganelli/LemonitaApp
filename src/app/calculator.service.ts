import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';
import { tHistory, tPerson, tPPPar, tPPEq, tParData, tEqData } from '../const/variables.components';

@Injectable({ providedIn: 'root' })
export class CalculatorService {

  constructor(private gblVar: GlobalVarsService) { }
	classicMode() {
		let varPropina: number = 0;
		let varBypeople: number = 0;
		let varPagoTotal: number = 0;
		let varPagoByPeople: number = 0;
		if ((iMonto < 1 && String(iMonto) != "") || (iCant < 1 && String(iCant) != "")) {
			this.translate.get('TST.MSGMISS').subscribe((trText: string) => { this.showToaster(trText); });
		} else if (String(iMonto) == "" || String(iCant) == "" || iSelec == null) {
			this.translate.get('ALRT.TTMISS').subscribe((trTitle: string) => {
				this.translate.get('ALRT.MSGMISS').subscribe((trMsg: string) => {
					this.translate.get('ALRT.BTNCLOSE').subscribe((trBtn: string) => {
						this.showAlert(trTitle, trMsg, trBtn);
					})
				})
			})
		} else {
			let percentData = iRange;
			if (iSelec != -1) { percentData = iSelec; }
			varPropina = iMonto / 100 * percentData;
			varBypeople = varPropina / iCant;
			varPagoTotal = Number(iMonto) + Number(varPropina);
			varPagoByPeople = iMonto / iCant;

			/*Output Data*/
			this.gblVar.outTotal = varPagoTotal;
			this.gblVar.outByPeople = varPagoByPeople;
			this.gblVar.outPropina = varPropina;
			this.gblVar.outByPeopleTip = varBypeople;
		}
	}
 	advanceCalc(iRange: number, iSelec: number) {
		let percentData: number = iRange/100; let ppCount_: number = 0;
		if(iSelec != (-1)) { percentData = iSelec; }
		let allAmount: number = 0/*, eqTIP: number = 0*/, parTIP: number = 0/*, eqTotal: number = 0, parTotal: number = 0*/;
		for(let pp_ of this.gblVar.ppArr) {
			if(pp_.data.length > 0) {
				ppCount_++;
				//#region Vars
				let ppParARR: { name: string; amount: number; tip: number; total: number; } = { name: pp_.name_, amount: 0, tip: 0, total: 0 };
				let ppEqARR: { name: string; total: number; } = { name: pp_.name_, total: 0 };
				let amount_: number = 0;
				//#endregion
				for(let csmp_ of pp_.data) { amount_ = Number(Number(amount_) + Number(csmp_.price)); }
				//#region Data Record
					//#region Parcial
						ppParARR.amount = amount_; 
						ppParARR.tip = Number(amount_*.percentData); 
						ppParARR.total = (Number(amount_) + Number(ppParARR.tip));
					//Total Parcial
						parTIP = Number(Number(parTIP) + Number(amount_*percentData));
					//#endregion
					//Equal
						ppEqARR.total = Number(amount_);
					//For All
						allAmount = Number(Number(allAmount) + Number(amount_));
				//#endregion
				//#region Push data
					this.gblVar.ppParARR.push(ppParARR);
					this.gblVar.ppEqARR.push(ppEqARR);
				//#endregion
			} else { this.gblVar.usersNodata = true; }
		} 
		//#region Equal Total
			this.gblVar.equalData = { 
				totalAmount: allAmount, 
				totalTip: Number(allAmount*percentData), 
				totalTipDiv: ((allAmount*percentData)/ppCount_), 
				total_: (Number(allAmount) + Number(allAmount*percentData)) 
			};
		//#endregion
		//#region ParTotal
			this.gblVar.parcialData = { 
				totalAmount: allAmount, 
				totalTip: parTIP, 
				total_: (allAmount + parTIP),
				TipEqDiv: (parTIP/ppCount_)
			};
		//#endregion
		return { parcial: this.gblVar.ppParARR, equal: this.gblVar.ppEqARR };
	}
}
