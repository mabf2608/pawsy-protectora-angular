import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalsListPageRoutingModule } from './animals-list-routing.module';

import { AnimalsListPage } from './animals-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalsListPageRoutingModule
  ],
  declarations: [AnimalsListPage]
})
export class AnimalsListPageModule {}
