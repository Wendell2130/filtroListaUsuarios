import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { USERS_LIST_DATA } from './data/user-list';
import { IFilterOptions } from './interfaces/user/filter-options.interface';
import { isWithinInterval } from "date-fns";

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
    filteredList=this.filterListByStatus(filterOptions.status,filteredList);
    filteredList=this.filterListByDate(filterOptions.starDate,filterOptions.endDate,filteredList);
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
  filterListByStatus(status: boolean | undefined, filteredList: IUser[]) {
    const STATUS_NOT_SELECTED = status===undefined;
    if(STATUS_NOT_SELECTED){
      return filteredList;
    }
    const filteredListByStatus=filteredList.filter((user)=>user.ativo===status);
    return filteredListByStatus;
  }
  filterListByDate(starDate: Date | undefined,endDate:Date | undefined , filteredList: IUser[]) { //adicionado pacote npm i date-fns(dependência de produção)
    const DATES_NOT_SELECTED = starDate===undefined || endDate===undefined; // não usa o --save-dev, ver package.json em dependecias
    if(DATES_NOT_SELECTED){
      return filteredList;
    }
    const filteredListByDate=filteredList.filter((user)=>isWithinInterval(user.dataCadastro,{
      start:starDate,
      end:endDate
    }));
    return filteredListByDate;
    ///OU
    // const checkDateInterval = (user:IUser) => isWithinInterval(new Date(user.dataCadastro),{
    //   star:starDate,
    //   end:endDate
    // });
    // const filteredListByDate =filteredList.filter(checkDateInterval);
  }


  filterListByDate2(starDate: Date | undefined,endDate:Date | undefined , filteredList: IUser[]) {
    
    return filteredList;
  }
  /////////////////////////////
}