var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';
var CalculatorService = /** @class */ (function () {
    function CalculatorService(gblVar) {
        this.gblVar = gblVar;
    }
    CalculatorService.prototype.classicMode = function (iMonto, iCant, iRange, iSelec) {
        var varPropina = 0, varBypeople = 0, varPagoTotal = 0, varPagoByPeople = 0;
        var percentData = iRange;
        if (iSelec != -1) {
            percentData = iSelec;
        }
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
    };
    CalculatorService.prototype.advanceCalc = function (iRange, iSelec) {
        this.clearPParr();
        var percentData = iRange, allAmount = 0, ppCount_ = 0, parTIP = 0;
        if (iSelec != (-1)) {
            percentData = iSelec;
        }
        for (var _i = 0, _a = this.gblVar.CachePpl.personas; _i < _a.length; _i++) {
            var pp_ = _a[_i];
            var perEq = { name: pp_.name_, total: 0 };
            var perPar = { name: pp_.name_, amount: 0, tip: 0, total: 0 };
            if (pp_.data.length > 0) {
                ppCount_++;
                for (var _b = 0, _c = pp_.data; _b < _c.length; _b++) {
                    var producto = _c[_b];
                    perEq.total += (Number)(producto.price);
                    perPar.amount += (Number)(producto.price);
                }
                {
                    allAmount += (Number)(perEq.total);
                    parTIP += (Number)(perPar.amount * percentData);
                    perPar.tip = (Number)(perPar.amount * percentData);
                    perPar.total = (Number)(perPar.amount + perPar.tip);
                    this.gblVar.ppEqARR.push(perEq);
                    this.gblVar.ppParARR.push(perPar);
                }
            }
        }
        this.gblVar.equalData = { totalAmount: allAmount, totalTip: Number(allAmount * percentData), totalTipDiv: ((allAmount * percentData) / ppCount_), total_: (Number(allAmount) + Number(allAmount * percentData)) };
        this.gblVar.parcialData = { totalAmount: allAmount, totalTip: parTIP, total_: (allAmount + parTIP), TipEqDiv: (parTIP / ppCount_) };
    };
    CalculatorService.prototype.clearPParr = function () {
        this.gblVar.ppEqARR = new Array(0);
        this.gblVar.ppParARR = new Array(0);
        this.gblVar.equalData = { totalAmount: 0, totalTip: 0, totalTipDiv: 0, total_: 0 };
        this.gblVar.parcialData = { totalAmount: 0, totalTip: 0, total_: 0, TipEqDiv: 0 };
    };
    CalculatorService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [GlobalVarsService])
    ], CalculatorService);
    return CalculatorService;
}());
export { CalculatorService };
//# sourceMappingURL=calculator.service.js.map