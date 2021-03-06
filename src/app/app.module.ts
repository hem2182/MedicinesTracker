import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { MedicineService } from './Services/medicine.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { CanDeactivateMedicinesGuard } from './Guards/can-deactivate-medicines.guard';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    AddMedicinesComponent,
    PageNotFoundComponent,
    MedicineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MedicineService, CanDeactivateMedicinesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
