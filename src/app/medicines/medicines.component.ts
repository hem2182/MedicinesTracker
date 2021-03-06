import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../Services/medicine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicinesModel } from '../Models/medicines-model';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  medicinesData: MedicinesModel[] = [];

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit() {
    this.GetMedicines();
  }

  GetMedicines() {
    this.medicinesData = [];
    this.medicineService.getMedicines().subscribe(
      (response) => {
        this.medicinesData = response;
        console.log(this.medicinesData);
      },
      (error) => { console.log(error); });
  }

  AddMedicines() {
    this.router.navigate(['/add/0']);
  }

  UpdateMedicine(medicine: MedicinesModel) {
    this.router.navigate(['/add/' + medicine.Id]);
  }

  DeleteMedicine(medicine: MedicinesModel) {
    this.medicineService.deleteMedicine(medicine.Id).subscribe(
      (response) => {
        this.GetMedicines();
      },
      (error) => { console.log(error); });

  }

  validateExpiry(date: string): boolean {
    const dateData = date.replace('-', '/');
    const expiry = new Date(dateData);
    const month = (expiry.getMonth() - new Date().getMonth());
    return month === 0;
  }

}
