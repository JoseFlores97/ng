import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { UserService } from '@user/services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [UserService]
})
export class CreateComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(x => {
      console.log(x);
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
