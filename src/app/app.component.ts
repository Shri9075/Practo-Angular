import { Component, inject ,OnInit} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { API_RESPONSE, Hospital, User } from '../core/Classes/Hospital.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../services/hospital.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  UserObj: User = new User();
  loogedHospitalData: Hospital = new Hospital();

  private hosptalSrv = inject(HospitalService);
  private router = inject(Router);


  ngOnInit(): void {
    
  }
  constructor() {
    const loogedData = localStorage.getItem('practoLogin');
    if (loogedData !== null) {
      this.loogedHospitalData = JSON.parse(loogedData);
    }
  }


  LoginUser() {
    this.hosptalSrv.onLogin(this.UserObj)
      .subscribe((result: API_RESPONSE) => {
        if (result.result) {
          this.loogedHospitalData = result.data;
          localStorage.setItem("practoLogin", JSON.stringify(result.data));
          
          Swal.fire({
            title: "Good job!",
            text: "you have Logged in Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          })
          .then(()=>{
            window.location.href = "home";
          })

          
          


        }
        else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials!",
            confirmButtonText: "Ok"


          });
        }
      }, error => {
        alert(JSON.stringify(error));
      })

  }

  resetLogin() {
    this.UserObj.userName = "";
    this.UserObj.password = "";
  }

  logoff() {
    localStorage.removeItem("practoLogin");
    this.loogedHospitalData = new Hospital();
    this.router.navigateByUrl("home")
  }

  showLogin() {
    const modal = document.getElementById('loginModal');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }

  closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal !== null) {
      modal.style.display = 'none';
    }
  }


}
