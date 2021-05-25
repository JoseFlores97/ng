import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/User';
import { USERS } from 'src/mock/users';

@Injectable()
export class UserService {

  hello = 'Hola mundo';

  constructor() {}

  findAll(): Observable<User[]> {
    return of(USERS);
  }
}
