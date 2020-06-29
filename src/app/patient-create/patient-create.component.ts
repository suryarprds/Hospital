import { Patient } from './../classes/patient/patient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/PatientService/patient.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(private patientservice: PatientService) { }

  patient: Patient = new Patient();
  submitted: Boolean = false;

  ngOnInit() {
    this.submitted = false;
  }
  patient_Create_form = new FormGroup({
    patient_SSNID: new FormControl('', [Validators.required,Validators.min(100000000),Validators.max(999999999) ]),
    patient_Name: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-z A-Z 0-9 ,./ ]*$')]),
    patient_Age: new FormControl('', [Validators.required,Validators.min(1),Validators.max(200) ]),
    patient_DOA: new FormControl('', [Validators.required]),
    patient_TOB: new FormControl('', [Validators.required]),
    patient_Address: new FormControl('', [Validators.required, Validators.maxLength(100),Validators.pattern('^[a-z A-Z 0-9 ,./]*$')]),
    patient_State: new FormControl('', [Validators.required, Validators.maxLength(20),Validators.pattern('^[a-z A-Z ]*$')]),
    patient_City: new FormControl('', [Validators.required, Validators.maxLength(20),Validators.pattern('^[a-z A-Z ]*$')])
  });

  savePatient() {
    this.patient = new Patient();
    this.patient.pat_ssn = this.Patient_SSNID.value;
    this.patient.pat_name = this.Patient_Name.value;
    this.patient.pat_age = this.Patient_Age.value;
    this.patient.pat_doj = this.Patient_DOA.value;
    this.patient.pat_rtype = this.Patient_TOB.value;
    this.patient.pat_address = this.Patient_Address.value;
    this.patient.pat_state = this.Patient_State.value;
    this.patient.pat_city = this.Patient_City.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this. patientservice.createPatient(this.patient)  
      .subscribe(data => console.log(data), error => console.log("Server Not found"));  
  }
  get Patient_SSNID() {
    return this.patient_Create_form.get('patient_SSNID');
  }
  get Patient_Name() {
    return this.patient_Create_form.get('patient_Name');
  }
  get Patient_Age() {
    return this.patient_Create_form.get('patient_Age');
  }
  get Patient_DOA() {
    return this.patient_Create_form.get('patient_DOA');
  }
  get Patient_TOB() {
    return this.patient_Create_form.get('patient_TOB');
  }
  get Patient_Address() {
    return this.patient_Create_form.get('patient_Address');
  }
  get Patient_State() {
    return this.patient_Create_form.get('patient_State');
  }
  get Patient_City() {
    return this.patient_Create_form.get('patient_City');
  }
}
