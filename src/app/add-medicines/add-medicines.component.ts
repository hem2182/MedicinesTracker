import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicinesModel } from '../Models/medicines-model';
import { MedicineService } from '../Services/medicine.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  @ViewChild('addMedicineForm', { static: false }) public addMedicineForm: NgForm;
  medicineData: MedicinesModel = { Name: '', Brand: '', Notes: '', Quantity: 0, Price: 0.00, ExpiryDate: '', Id: 0 };
  ExpiryDateInValid = true;

  constructor(private medicineService: MedicineService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (id > 0) {
      this.medicineService.getMedicinesById(+id).subscribe((response) => {
        this.medicineData = response;
        console.log('ng on init binding for medicineData');
        console.log(this.medicineData);
      }, (error) => {
        console.log(error);
      });
    }
  }

  ValidateDate(expiryDate: string) {
    const validDate = new Date(expiryDate);
    const diff = validDate.getMonth() - new Date().getMonth();
    console.log(diff);
    if (diff === 0) {
      this.ExpiryDateInValid = true;
    } else {
      this.ExpiryDateInValid = false;
    }

  }

  Home() {
    this.router.navigate(['/medicines']);
  }

  Submit(medicineForm: NgForm) {
    if (this.medicineData.Id > 0) {
      console.log('Medicine Data sending for update to service: ' + this.medicineData);
      console.log(this.medicineData.Name);
      console.log(this.medicineData.Quantity);
      this.medicineService.updateMedicines(this.medicineData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.medicineService.addMedicines(this.medicineData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    medicineForm.reset();
    this.router.navigate(['/medicines']);

  }

}
