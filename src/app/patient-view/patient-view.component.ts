import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from './../classes/patient/patient';
import { PatientService } from '../services/PatientService/patient.service';
import { Observable, Subject } from "rxjs";
@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnDestroy, OnInit {
  constructor(private patientservice: PatientService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  patients: Observable<Patient[]>;
  patientlist: any;

  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.patientservice.getPatientList().subscribe(data => {
      this.patients = data;
      this.dtTrigger.next();
    });

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
