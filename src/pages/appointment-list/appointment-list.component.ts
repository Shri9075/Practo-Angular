import { Component, inject, OnInit } from '@angular/core';
import { API_RESPONSE, Appointment, Hospital, User } from '../../core/Classes/Hospital.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentService } from '../../services/appointment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentObj: Appointment = new Appointment();
  appointmentHospitalData: Appointment[] = [];
  private appointmentSrv = inject(AppointmentService);
  appointmentdata: Appointment[] = [];
  loogedAppointmentData: Appointment = new Appointment();

  private router = inject(Router);

  loggedUserData: User = new User();

  constructor() {
    const loogedData = localStorage.getItem('practoLogin');

    if (loogedData !== null) {
      this.loggedUserData = JSON.parse(loogedData);
      this.newAppointmentObj.hospitalId = JSON.parse(loogedData).hospitalId;
      //this.appointmentData.appointmentId = JSON.parse(loogedData).appointmentId;

    }
  }
  ngOnInit(): void {
    this.loadGrid();

  }
  loadGrid() {
    if (this.loggedUserData.userName == "superadmin") {
      this.getAllAppointments();
    }
    else {
      this.getAppointmentByHospital();
    }
  }
  BookingAppointment() {
    this.appointmentSrv.addAppointment(this.newAppointmentObj)
      .subscribe((result: API_RESPONSE) => {
        if (result.result) {
          this.loogedAppointmentData = result.data;
          const loggedAppintmentData = localStorage.setItem("customer", JSON.stringify(result.data));


          Swal.fire({
            title: "Good job!",
            text: "Appointment Added Successfully!",
            icon: "success",
            confirmButtonText: "Ok"
          });
          this.resetBookAppointmentDetails();
          this.loadGrid();


        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",

          });
        }

      }, error => {
        alert(JSON.stringify(error));
      })
  }


  resetBookAppointmentDetails() {
    this.newAppointmentObj.age = 0;
    this.newAppointmentObj.appointmentDate = new Date();
    this.newAppointmentObj.appointmentTime = "";
    this.newAppointmentObj.city = "";
    this.newAppointmentObj.gender = "";
    this.newAppointmentObj.mobileNo = "";
    this.newAppointmentObj.name = "";
    this.newAppointmentObj.naration = "";
    this.newAppointmentObj.isFirstVisit = false;
  }

  getAppointmentByHospital() {
    this.appointmentSrv.getAllAppointmentsbyHospitalId(this.newAppointmentObj.hospitalId)
      .subscribe((result: API_RESPONSE) => {
        if (result.result) {
          this.appointmentHospitalData = result.data;
        }
      })
  }


  getAllAppointments() {
    this.appointmentSrv.getAllAppointmentsbyHospitalId(this.newAppointmentObj.hospitalId)
      .subscribe((result: API_RESPONSE) => {
        if (result.result) {
          this.appointmentHospitalData = result.data;
          //this.appointmentId = result.data.appointmentId;
        }
      })
  }
  onBookingAppointment() {
    Swal.fire({
      title: "Great!",
      text: "Appointment Booked Successfully!",
      titleText: "Thank you for choosing Govind Hospital !!",
      icon: "success",
      confirmButtonText: "Ok"
    });
    this.router.navigateByUrl("home");
  }

  deleteAppointment() {
    this.appointmentSrv.DeleteAppointmentByAppointment(this.loogedAppointmentData.appointmentId)
      .subscribe((result: API_RESPONSE) => {

        this.loadGrid();
        Swal.fire({
          title: "Great!",
          titleText: "Appointment Deleted Successfully !!",
          icon: "success",
          confirmButtonText: "Ok"
        });


      }, error => {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",

        });


      })
  }
}
