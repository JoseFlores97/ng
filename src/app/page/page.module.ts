import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class PageModule { }
