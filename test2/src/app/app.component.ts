import { Component, OnInit } from '@angular/core';
import { User } from './_modules/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser() {
    if (typeof localStorage !== 'undefined') {
      const userString: string | null = localStorage.getItem('user');
      if (userString) {
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
      }
    }
  }
}