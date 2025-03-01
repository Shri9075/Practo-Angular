import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AppointmentListComponent } from '../pages/appointment-list/appointment-list.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HospitalListComponent } from '../pages/hospital-list/hospital-list.component';
import { NewHospitalComponent } from '../pages/new-hospital/new-hospital.component';
import { PatientListComponent } from '../pages/patient-list/patient-list.component';
import { RegistartionComponent } from '../pages/registartion/registartion.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'appointment-list',
        component: AppointmentListComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'hospitals',
        component: HospitalListComponent
    },
    {
        path: 'hospital',
        component: NewHospitalComponent
    },
    {
        path: 'patients',
        component: PatientListComponent
    },
    {
        path:"registration",
        component:RegistartionComponent
    }

];
