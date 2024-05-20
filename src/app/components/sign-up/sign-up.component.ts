import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  clicked: boolean = false;
  SignupForm: FormGroup;

  constructor(private _authS: AuthService) {
    this.SignupForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{6,12}$/),
      ]),
    
    
    });
  }

  handleSignUp() {
    this.clicked = true;

    if (this.SignupForm.invalid)
      return;

    this._authS.signUp(this.SignupForm.value).subscribe({
      next: (response) => {
        console.log(response);
      }, 
      error: (err) => {
        console.log(err);
      }
    });
  }
}

