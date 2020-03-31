import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public roles = [
    {
      id: 'SU',
      name: 'Super User'
    },
    {
      id: 'SL',
      name: 'State Level'
    },
    {
      id: 'DL',
      name: 'District Level'
    },
    {
      id: 'CHC',
      name: 'Community health center'
    },
    {
      id: 'PHC',
      name: 'Primary health center'
    },
  ];

  public selectedRole = 'SU';

  constructor(private router: Router) {

  }
  public login(path) {
    this.router.navigate([path])
  }
}
