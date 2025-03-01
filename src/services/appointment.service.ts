import { inject, Injectable } from '@angular/core';
import { API_RESPONSE, Appointment } from '../core/Classes/Hospital.model';
import { environment } from '../environments/environment';
import { Constant } from '../Constant/Constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private http = inject(HttpClient);
  constructor() { }

  addAppointment(appointObj: Appointment): Observable<API_RESPONSE> {
    return this.http.post<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.ADD_APPOINTMENTS, appointObj);

  }

  getAllAppointmentsbyHospitalId(id: number): Observable<API_RESPONSE> {
    return this.http.get<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.GET_APPOINTMENT_BY_HOSPITALID + id);

  }

  getAppointments(): Observable<API_RESPONSE> {
    return this.http.get<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.GET_ALL_APPOINTMENTS);

  }

  DeleteAppointmentByAppointment(appointmentId:number): Observable<API_RESPONSE>  {
    return this.http.delete<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.DELETE_APPOINTMENT + appointmentId);
  }
}
