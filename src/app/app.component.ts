import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { USERS_LIST_DATA } from './data/user-list';
import { IFilterOptions } from './interfaces/user/filter-options.interface';


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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }
  filterUsersList(filterOptions: IFilterOptions,usersList:IUser[]): IUser[] {
    let filteredList: IUser[] = [] ;
    filteredList=this.filterListByName(filterOptions.name,usersList);
    return filteredList;
  }
  //////////////////////////
  filterListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED=name===undefined;
    
    if(NAME_NOT_TYPPED){
      return usersList;
    }
    const filteredListByName=usersList.filter(
      (user)=>user.nome.toLowerCase().includes(name.toLowerCase())
    );
    
    return filteredListByName;
  }
  filterListByStatus(status: boolean, filteredList: IUser) {
    return filteredList;
  }
  filterListByDate(date: Date, filteredList: IUser) {
    return filteredList;
  }
  /////////////////////////////
}