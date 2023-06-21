import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterClassPageRoutingModule } from './register-class-routing.module';

import { RegisterClassPage } from './register-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterClassPageRoutingModule
  ],
  declarations: [RegisterClassPage]
})
export class RegisterClassPageModule {}
