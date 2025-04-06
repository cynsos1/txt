import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.all().subscribe(res => {
      this.users = res;
    });
  }
}
