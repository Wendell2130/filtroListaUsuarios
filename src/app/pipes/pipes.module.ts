import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';



@NgModule({
  declarations: [
    PhonePipe,
    StatusPipe,
    DashIfEmptyPipe
  ],
  imports: [
    CommonModule
  ],exports:[
    PhonePipe,StatusPipe,DashIfEmptyPipe
  ]
})
export class PipesModule { }
