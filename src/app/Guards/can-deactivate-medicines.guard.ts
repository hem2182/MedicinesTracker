import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddMedicinesComponent } from '../add-medicines/add-medicines.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateMedicinesGuard implements CanDeactivate<AddMedicinesComponent> {
  canDeactivate(component: AddMedicinesComponent): boolean {
    if (component.addMedicineForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
}
