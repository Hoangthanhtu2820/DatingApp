import { response } from 'express';
import { AccountService } from './../_services/account.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() canelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService,private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
      
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel(){
    this.canelRegister.emit(false);
  }
}