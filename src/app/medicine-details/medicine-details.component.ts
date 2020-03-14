import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineService } from '../Services/medicine.service';
import { MedicinesModel } from '../Models/medicines-model';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  medicineDetails: MedicinesModel = { id: 0, name: '', brand: '', notes: '', quantity: 0, expiryDate: '', price: 0.0 }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private medicineService: MedicineService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.medicineService.getMedicinesById(+id).subscribe((response) => {
      this.medicineDetails = response;
      console.log(this.medicineDetails);
    }, (error) => {
      console.log(error);
    });
  }

  Home() {
    this.router.navigate(['/medicines']);
  }

}
