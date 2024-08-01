import { Component, EventEmitter, Output,Input } from '@angular/core';
import { USERS_LIST_DATA } from '../../data/user-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  //  dataSource = ELEMENT_DATA;
   @Input() usersList:IUser[] =[];
   
   @Output('userSelected') userSelectedEmitt=new EventEmitter<IUser>();
   onUserSelected(user:IUser){
    this.userSelectedEmitt.emit(user);
    console.log(user);
   }
  }
