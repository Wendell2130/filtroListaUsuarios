import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { USERS_LIST_DATA } from './data/user-list';
import { IFilterOptions } from './interfaces/user/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {
  title = 'users-filter-project';
  showDetails = false; //esconde userselected
  usersList: IUser[] = []; //inicia no ngOnInit()
  userSelected: IUser = {} as IUser;
  usersListFiltered: IUser[] = [];
  ///////////////////////////////////////////
  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = USERS_LIST_DATA;
      this.usersListFiltered = this.usersList;
    }, 1000);
  }
///////////////////////////////////////////////
  onUserSelected(userSelected: IUser) {
    this.userSelected = userSelected;
    this.showDetails = true;
  }
  ////////////////////////////////////////////////////
  onFilter(filterOptions: IFilterOptions) { //ativado no botao Filter
    // console.log(filterOptions);
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
  
  //////////////////////////
  
  
  


  filterListByDate2(starDate: Date | undefined,endDate:Date | undefined , filteredList: IUser[]) {
    
    return filteredList;
  }
  /////////////////////////////
}