import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../../classes/patient/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  createPatient(patient: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`,patient);
  }

  getPatientList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}`+'partner-list');
       return this.http.get("assets/data.json");
  }

  deletePartner(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/partner-delete/${id}`, { responseType: 'text' });
  }
}
