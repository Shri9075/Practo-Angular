import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../Constant/Constant';

import { API_RESPONSE, Appointment, Hospital, User } from '../core/Classes/Hospital.model';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) {

  }
  registerHospital(hospitalobj: Hospital): Observable<API_RESPONSE> {
    return this.http.post<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.ADD_NEW_HOSPITAL, hospitalobj);

  }

  onLogin(userObj: User): Observable<API_RESPONSE> {
    return this.http.post<API_RESPONSE>(environment.API_URL + Constant.API_END_POINTS.LOGIN, userObj)
  }

  
}
