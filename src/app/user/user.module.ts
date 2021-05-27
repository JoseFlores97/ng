import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from './components/create/create.component';
import { UserService } from './services/user.service';
import { MaterialModule } from '@material/material.module';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
