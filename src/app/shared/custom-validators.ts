import { FormGroup } from "@angular/forms";
export class CustomValidators {
  static passwordMatchValidator(control: FormGroup): void {
    const password = control.get("password");
    const passwordConfirm = control.get("password_confirmation");

    if (
      password &&
      passwordConfirm &&
      "" !== passwordConfirm.value &&
      password.value !== passwordConfirm.value
    ) {
      control.get("password_confirmation").setErrors({ NoPasswordMatch: true });
    }
  }
}
