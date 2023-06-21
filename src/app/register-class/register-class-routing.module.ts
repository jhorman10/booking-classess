import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterClassPage } from './register-class.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterClassPageRoutingModule {}
