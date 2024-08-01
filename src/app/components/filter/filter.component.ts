import { Component, EventEmitter,Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statusList: {value: boolean, viewValue: string}[] = [
    {value: true, viewValue: 'Ativo'},
    {value: false, viewValue: 'Inativo'},
   
  ];
  @Output('onFilter') onFilterEmit=new EventEmitter<IFilterOptions>();

  filterOptions:IFilterOptions ={
    name:"",
    starDate:undefined,
    endDate:undefined,
    status:undefined
  }
  onFilter(){
    this.onFilterEmit.emit(this.filterOptions);
    
  }
}
