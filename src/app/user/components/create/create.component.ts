import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { UserService } from '@user/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [UserService]
})
export class CreateComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(x => {
      console.log(x);
    });
  }

}
