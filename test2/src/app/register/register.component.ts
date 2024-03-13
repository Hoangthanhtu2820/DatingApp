import { response } from 'express';
import { AccountService } from './../_services/account.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() canelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) {
    
  }

  ngOnInit(): void {
      
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  cancel(){
    this.canelRegister.emit(false);
  }
}