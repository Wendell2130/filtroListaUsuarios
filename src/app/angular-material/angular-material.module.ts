import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,
    MatIconModule,MatDividerModule,
    MatListModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,
    MatSelectModule,MatTableModule
  ],
  providers:[provideNativeDateAdapter()],
  exports:[
    MatButtonModule,MatIconModule,
    MatDividerModule,MatListModule,
    MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatSelectModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
