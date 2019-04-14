import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(RegisterComponent) child : RegisterComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }



}
