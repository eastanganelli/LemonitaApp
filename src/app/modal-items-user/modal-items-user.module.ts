import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalItemsUserComponent } from './modal-items-user.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [ModalItemsUserComponent],
  entryComponents: [],
})
export class ModalItemsUserModule {}