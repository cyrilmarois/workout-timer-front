import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password_confirmation: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm.patchValue({password: 'w0rK0ut!'});
  }

  onSubmit() {
    console.warn('SUBMIT', this.registerForm.value);
  }
}
