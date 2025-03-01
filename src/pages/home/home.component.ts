import { Component, inject } from '@angular/core';
import { NewHospitalComponent } from '../new-hospital/new-hospital.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewHospitalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router = inject(Router);
constructor(){

}

logoff(){
 this.router.navigateByUrl("/")
}


showLogin() {
    const modal = document.getElementById('hospitalModal');
    if (modal !== null) {
      modal.style.display = 'block';
    }
  }
  
  closeLogin() {
    const modal = document.getElementById('hospitalModal');
    if (modal !== null) {
      modal.style.display = 'none';
    }
  }
}
