import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import {DataTablesModule} from 'angular-datatables';
import { MedicineCreateComponent } from './medicine-create/medicine-create.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { MedicineViewComponent } from './medicine-view/medicine-view.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientCreateComponent,
    PatientUpdateComponent,
    PatientViewComponent,
    PatientDeleteComponent,
    MedicineCreateComponent,
    MedicineUpdateComponent,
    MedicineViewComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
