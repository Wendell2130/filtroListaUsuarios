import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponent } from './teste/teste.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    TesteComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
   
  ], exports:[
    TesteComponent,
    UserDetailsComponent
  ]
})
export class ComponentsModule { }
