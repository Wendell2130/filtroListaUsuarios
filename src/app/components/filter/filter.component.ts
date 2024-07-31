import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  foods: {value: string, viewValue: string}[] = [
    {value: '1', viewValue: 'Ativo'},
    {value: '2', viewValue: 'Inativo'},
   
  ];
}
