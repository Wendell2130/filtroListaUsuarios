import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/user/filter-options.interface";

const filterListByName=(name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }
    const filteredListByName = usersList.filter(
        (user) => user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredListByName;
}

const filterListByStatus=(status: boolean | undefined, filteredList: IUser[])=> {
    const STATUS_NOT_SELECTED = status===undefined;
    if(STATUS_NOT_SELECTED){
      return filteredList;
    }
    const filteredListByStatus=filteredList.filter((user)=>user.ativo===status);
    return filteredListByStatus;
  }
  
  const filterListByDate=(starDate: Date | undefined,endDate:Date | undefined , filteredList: IUser[])=> { //adicionado pacote npm i date-fns(dependência de produção)
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

 const filterUsersList=(filterOptions: IFilterOptions,usersList:IUser[]): IUser[] =>{
    let filteredList: IUser[] = [] ;
    filteredList=filterListByName(filterOptions.name,usersList);
    filteredList=filterListByStatus(filterOptions.status,filteredList);
    filteredList=filterListByDate(filterOptions.starDate,filterOptions.endDate,filteredList);
    return filteredList;
  }

  export {filterUsersList}; //mesmo nome do arquivo para organização