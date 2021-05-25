import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents = [
  MatSliderModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: MaterialComponents
})
export class MaterialModule { }
