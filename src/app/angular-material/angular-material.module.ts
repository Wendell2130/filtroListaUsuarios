import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,MatIconModule,MatDividerModule,MatListModule
  ],
  exports:[
    MatButtonModule,MatIconModule,MatDividerModule,MatListModule
  ]
})
export class AngularMaterialModule { }
