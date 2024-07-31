import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/user-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'users-filter-project';
  
 userSelected:IUser=UsersList[2];
  
}
