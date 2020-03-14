import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinesModel } from '../Models/medicines-model';
import { MedicineService } from '../Services/medicine.service';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  medicineData: MedicinesModel = { name: '', brand: '', notes: '', quantity: 0, price: 0.00, expiryDate: '11/11/2020', id: 0 };

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit() {
  }

  Home() {
    this.router.navigate(['/medicines']);
  }

  Submit() {
    console.log(this.medicineData);
    this.medicineService.addMedicines(this.medicineData).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    this.router.navigate(['/medicines']);
  }

}
