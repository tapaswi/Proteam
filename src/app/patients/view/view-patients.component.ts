import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})
export class ViewPatientsComponent {
  @ViewChild('allocate', {static:false}) public allocateModal: ModalDirective;

  public totalCount = 3;

  public allocatePatients(){

  }
}
