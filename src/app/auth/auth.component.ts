import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.sass"],
})
export class AuthComponent implements OnInit {
  loginForm = this.formBuilder.group({
    login: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(
      "SUBMIT",
      this.loginForm.value,
      JSON.stringify(this.loginForm.value)
    );
  }
}
