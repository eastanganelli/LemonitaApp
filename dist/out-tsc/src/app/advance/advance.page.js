var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { CalculatorService } from '../calculator.service';
import { ErrorMSGService } from '../error-msg.service';
import { ModalItemsUserComponent } from '../modal-items-user/modal-items-user.component';
var AdvancePage = /** @class */ (function () {
    //#endregion
    //#endregion
    function AdvancePage(navCtrl, alertCtrl, modalCtrl, glbVar, calc, alertSrvce) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.glbVar = glbVar;
        this.calc = calc;
        this.alertSrvce = alertSrvce;
        //#region Vars
        //#region Arrays
        this.ppArr = { time_: 0, personas: new Array(0) };
        this.ppParARR = new Array(0);
        this.ppEqARR = new Array(0);
        //#endregion
        //#region DataIN
        this.notCalculated = true;
        this.ppTT = 0;
        this.valQuality = 0;
        this.rangeValue = 50;
        this.tipData_ = 'Equal_';
        this.readData();
    }
    //ionViewWillEnter() {  }
    //#region pplFNs
    AdvancePage.prototype.addPer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userpop;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Ingresar Nombre',
                            inputs: [{ name: 'nameIN', type: 'text' }],
                            buttons: [{ text: 'Cancel' }, { text: 'Add', role: 'add', handler: function (data) { _this.ppArr.personas.push({ name_: data.nameIN, data: new Array(0) }); _this.saveData(); } }]
                        })];
                    case 1:
                        userpop = _a.sent();
                        userpop.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* async openPer(id: number) {
        let addpop = await this.alertCtrl.create({
            header: 'Consumo',
            inputs: [{ name: 'itemIN', placeholder: 'Pedido', type: 'text' }, { name: 'precioIN', placeholder: 'Precio', type: 'number' }],
            buttons: [ { text: 'Cancel' }, { text: 'Add', role: 'add', handler: data => { this.ppArr.personas[id].data.push({name: data.itemIN, count: 1, price: data.precioIN}); this.saveData(); } } ]
        }); addpop.present();
    } */
    AdvancePage.prototype.openPer = function (id_) {
        return __awaiter(this, void 0, void 0, function () {
            var modalItemByUser;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: ModalItemsUserComponent, componentProps: { userID: id_, tipo_: 'modList' } })];
                    case 1:
                        modalItemByUser = _a.sent();
                        modalItemByUser.onDidDismiss().then(function () { _this.readData(); });
                        return [4 /*yield*/, modalItemByUser.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancePage.prototype.rmPer = function (id) { this.ppArr.personas.splice(id, 1); this.saveData(); };
    AdvancePage.prototype.notMe = function (id) { if (id != 0) {
        return false;
    } return true; };
    //#endregion
    //#region FN
    AdvancePage.prototype.calculate = function (iRange, iSelec) {
        if (this.alertSrvce.itsComplete(iSelec) == 0) {
            var m_data = this.calc.advanceCalc(iRange, iSelec);
            this.notCalculated = false;
        }
    };
    AdvancePage.prototype.close = function () {
        this.notCalculated = true;
        this.ppEqARR = new Array(0);
        this.ppParARR = new Array(0);
    };
    //#endregion
    //#region cacheFNs
    AdvancePage.prototype.readData = function () {
        //#region Var
        var temp_data = this.glbVar.readCache();
        console.log("tiempo: " + temp_data.time_);
        //let sum 	  	= (temp_data.time_/1000) + 21600;
        var sum = (temp_data.time_ / 1000) + 216;
        var actual_time = ((new Date()).getTime()) / 1000;
        //#endregion
        if (sum > actual_time) {
            console.log(true);
            this.ppArr = temp_data;
        }
        else {
            console.log(false);
            this.clearData();
        }
    };
    AdvancePage.prototype.saveData = function () { this.glbVar.writeCache(this.ppArr); };
    AdvancePage.prototype.clearData = function () {
        var aux_per = new Array(0);
        this.ppArr = { time_: (new Date()).getTime(), personas: aux_per };
        this.ppArr.personas.push({ name_: 'Me', data: new Array(0) }),
            this.glbVar.writeCache(this.ppArr);
    };
    AdvancePage = __decorate([
        Component({ selector: 'app-advance', templateUrl: 'advance.page.html', styleUrls: ['advance.page.scss'] }),
        __metadata("design:paramtypes", [NavController, AlertController, ModalController, GlobalVarsService, CalculatorService, ErrorMSGService])
    ], AdvancePage);
    return AdvancePage;
}());
export { AdvancePage };
//# sourceMappingURL=advance.page.js.map