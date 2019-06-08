var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { GlobalVarsService } from '../global-vars.service';
import { ErrorMSGService } from '../error-msg.service';
var ModalItemsUserComponent = /** @class */ (function () {
    function ModalItemsUserComponent(navParams, glbVar, modalCtrl, errCtrl) {
        this.navParams = navParams;
        this.glbVar = glbVar;
        this.modalCtrl = modalCtrl;
        this.errCtrl = errCtrl;
        this.mod_ = 'modList';
        this.myItems = new Array(0);
        this.nameProd = null;
        this.priceProd = 0;
        this.readItems();
    }
    ModalItemsUserComponent.prototype.incremental = function (id_) { this.myItems[id_].count++; this.update(); };
    ModalItemsUserComponent.prototype.decremental = function (id_) {
        if (this.myItems[id_].count > 1) {
            this.myItems[id_].count--;
        }
        else {
            this.errCtrl.showAlertCtrl("ExIUDecr");
        }
        this.update();
    };
    ModalItemsUserComponent.prototype.itemRemove = function (id_) { this.myItems.splice(id_, 1); this.update(); };
    ModalItemsUserComponent.prototype.addProducto = function (nameProd, priceProd) { this.myItems.push({ name: nameProd, count: 1, price: priceProd }); this.update(); this.clearInputs(); };
    ModalItemsUserComponent.prototype.readItems = function () {
        this.userID_ = this.navParams.get('userID');
        this.mod_ = this.navParams.get('tipo_');
        this.myItems = this.glbVar.CachePpl.personas[this.userID_].data;
    };
    ModalItemsUserComponent.prototype.update = function () { this.glbVar.updateCache(this.userID_, this.myItems); };
    ModalItemsUserComponent.prototype.priceXcount = function (precio, cant) { return precio * cant; };
    ModalItemsUserComponent.prototype.clearInputs = function () {
        var iItem_ = document.getElementById("iName");
        iItem_.value = '';
        var iPrice_ = document.getElementById("iPrice");
        iPrice_.value = '';
    };
    ModalItemsUserComponent.prototype.meClose = function () { this.modalCtrl.dismiss(); };
    ModalItemsUserComponent = __decorate([
        Component({ selector: 'app-modal-items-user', templateUrl: './modal-items-user.component.html', styleUrls: ['./modal-items-user.component.scss'] }),
        __metadata("design:paramtypes", [NavParams, GlobalVarsService, ModalController, ErrorMSGService])
    ], ModalItemsUserComponent);
    return ModalItemsUserComponent;
}());
export { ModalItemsUserComponent };
//# sourceMappingURL=modal-items-user.component.js.map