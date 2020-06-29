import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';

const routes: Routes = [{ 
  path: '', redirectTo: 'PatientCreateComponent', pathMatch: 'full' },
{ path: 'create-patient', component: PatientCreateComponent},
{ path: 'update-patient', component: PatientUpdateComponent },
{ path: 'delete-patient', component: PatientDeleteComponent},
{ path: 'view-one-patient', component: PatientSearchComponent},
{ path: 'view-all-patient', component: PatientViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
