import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponent } from './teste/teste.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';




@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
   
  ], exports:[
    TesteComponent
  ]
})
export class ComponentsModule { }
