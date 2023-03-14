import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputpagePageRoutingModule } from './inputpage-routing.module';

import { InputpagePage } from './inputpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputpagePageRoutingModule
  ],
  declarations: [InputpagePage]
})
export class InputpagePageModule {}
