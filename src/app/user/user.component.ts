import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loggedIn: boolean;
  user: { username: string };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
