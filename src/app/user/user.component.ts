import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/Data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService, DataService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user!: {name: string};
  isLoggedIn = false;
  data: string | undefined = undefined;

  constructor(private userService: UserService, private dataService: DataService) {}


  ngOnInit(): void {
    this.user= this.userService.user;
    this.dataService.getDetails().then((data: string) => {
      this.data = data;
    });
  }

}
