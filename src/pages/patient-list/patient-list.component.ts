import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
  selectedYear: number;
  years: number[] = [];
  
  constructor() {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1920; year--) {
      this.years.push(year);
    }
  }
}
