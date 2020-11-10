import { ValidationErrors, FormGroup, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password");
  const passwordConfirm = control.get("password_confirmation");

  return password &&
    passwordConfirm &&
    "" !== passwordConfirm.value &&
    password.value !== passwordConfirm.value
    ? {
        NoPasswordMatch: true,
      }
    : null;
};
