import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from './medicines/medicines.component';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'medicines', component: MedicinesComponent },
  { path: 'add', component: AddMedicinesComponent },
  { path: '', component: MedicinesComponent },
  { path: '*', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
