import { Component , OnDestroy } from '@angular/core';
import { API_RESPONSE, Hospital } from '../../core/Classes/Hospital.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../../services/hospital.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent  implements OnDestroy{
  public hospitalObj: Hospital = new Hospital();
  private subscription: Subscription[] = [];
  constructor(private hospitalSrv: HospitalService) {

  }

  ngOnDestroy():void{
 this.subscription.pop();
  }




  onRegister() {
    this.subscription.push(
      this.hospitalSrv.registerHospital(this.hospitalObj)
        .subscribe((result: API_RESPONSE) => {
          if (result.result) {
            Swal.fire({
              title: "Good job!",
              text: "Registered Successfully!",
              icon: "success",
              confirmButtonText: "Ok"
            });
            //this.onResetHospital();
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
    )
  }

  onResetHospital() {
    this.hospitalObj.hospitalId = 0;
    this.hospitalObj.hospitalAddress = "";
    this.hospitalObj.hospitalCity = "";
    this.hospitalObj.hospitalContactNo = "";
    this.hospitalObj.hospitalEmailId = "";
    this.hospitalObj.hospitalName = "";
    this.hospitalObj.hospitalOwnerContactNo = "";
    this.hospitalObj.hospitalOwnerName = "";
    this.hospitalObj.userName = "";
    this.hospitalObj.password = "";

  }
}
