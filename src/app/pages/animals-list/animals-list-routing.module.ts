import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsListPage } from './animals-list.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsListPageRoutingModule {}
