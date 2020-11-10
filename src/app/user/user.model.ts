import { Deserializable } from "./../core/deserializable";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class User implements Deserializable {
  private id: number;
  private first_name: string;
  private last_name: string;
  private password: string;
  private email: string;

  deserializable(input: any) {
    Object.assign(this, input);
    return this;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.first_name;
  }

  setFirstName(name: string) {
    this.first_name = name;
  }

  getLastName() {
    return this.last_name;
  }

  setLastName(name: string) {
    this.last_name = name;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }
}
