import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [
  MatSliderModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: MaterialComponents
})
export class MaterialModule { }
