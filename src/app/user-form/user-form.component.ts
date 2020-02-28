// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input() h1Text: string;
  @Input() submitText: string;
  @Input() user: User;
  //El eventEmiter recogemos los eventos
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  submit() {
    this.onSubmit.emit(this.user);
  } //Devolvemos el usuario

}
