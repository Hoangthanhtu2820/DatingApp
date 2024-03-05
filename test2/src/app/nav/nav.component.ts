import { AccountService } from './../_services/account.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  model: any = {}
  loggedIn: boolean = false;
  constructor(private AccountService: AccountService) {

  }

  ngOnInit(): void {

  }

  login(){
    this.AccountService.login(this.model).subscribe({
        next: response =>{
          console.log(response);
          this.loggedIn = true;
      },  
        error: error => {
        console.log(error);
      }
    })
  }

  logout(){
    this.loggedIn = false;
  }
}

