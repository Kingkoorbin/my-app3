import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputpagePage } from './inputpage.page';

const routes: Routes = [
  {
    path: '',
    component: InputpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputpagePageRoutingModule {}
