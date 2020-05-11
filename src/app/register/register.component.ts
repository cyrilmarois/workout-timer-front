import { CustomValidators } from "./../shared/custom-validators";
import { Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group(
    {
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      password_confirmation: ["", [Validators.required]],
    },
    {
      validators: [CustomValidators.passwordMatchValidator],
    }
  );

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm.patchValue({ password: "w0rK0ut!" });
  }

  onSubmit() {
    console.warn("SUBMIT", this.registerForm.value);
  }

  get password() {
    return this.registerForm.get("password");
  }

  get passwordConfirmation() {
    return this.registerForm.get("password_confirmation");
  }
}
