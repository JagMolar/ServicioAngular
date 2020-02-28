import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.usersService.getUser(id).subscribe(user => {
      this.user = user;
    })
  }

  update(user: User) {
    this.usersService.updateUser(user).subscribe(() => {
      this.router.navigate(['/crud']);
    })
  }

}
