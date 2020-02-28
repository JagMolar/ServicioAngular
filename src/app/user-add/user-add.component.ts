import { Component } from '@angular/core';
import {User} from "../user";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  public user: User = new User;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  save(user: User) {
    user.id = Math.floor(Math.random() * 10000000000000000) + 1;
    this.usersService.addUser(user).subscribe(() => {
      this.router.navigate(['/crud']);
    })
  }
}
