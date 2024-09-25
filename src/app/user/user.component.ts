import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user!: {name: string};
  isLoggedIn = false;

  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.user= this.userService.user;
    //this.isLoggedIn = true;
  }

}
