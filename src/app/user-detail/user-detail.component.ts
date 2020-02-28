import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";
import {User} from "../user";
import { from } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {

    const id =this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.usersService.getUser(id).subscribe(user => {
      this.user = user;
    })
  }

}
