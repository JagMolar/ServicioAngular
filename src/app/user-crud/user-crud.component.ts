import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user";
import { from } from 'rxjs';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {


  public users: User[]; //recogemos por un array los usuarios

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users =>{
      this.users = users;
    });
  }

  remove(user: User){
    this.usersService.deleteUser(user).subscribe(()=>{
      this.users = this.users.filter(u => user.id !== u.id);
    })
  }

}
