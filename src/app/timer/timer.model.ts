import { Deserializable } from './../core/deserializable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Timer implements Deserializable {
  private id: number;
  private name: string;
  private description: string;

  deserializable(input: any) {
    Object.assign(this, input);
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;

    return this;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;

    return this;
  }
}
