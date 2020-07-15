import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { AbstractControl } from '@angular/forms';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {
  constructor(private signupService: SignupService) {}

  checkUserNnameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(3000))
        .pipe(
          switchMap((userName) => {
            console.log('checking if user is available');
            return this.signupService.checkUserNameTaken(userName);
          })
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
