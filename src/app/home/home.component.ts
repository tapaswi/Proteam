import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  /*
    SU - Super User
    SL - State Level
    DL - District Level
    CHC - Community health center
    PHC - Primary health center
  */
  public role = null;
  public view = 'view-patients';
}
