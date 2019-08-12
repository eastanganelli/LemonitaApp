import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalItemsUserPage } from './modal-items-user.page';

const routes: Routes = [
  {
    path: '',
    component: ModalItemsUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalItemsUserPage]
})
export class ModalItemsUserPageModule {}
