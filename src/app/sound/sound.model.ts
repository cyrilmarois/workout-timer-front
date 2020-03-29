import { Deserializable } from './../core/deserializable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sound implements Deserializable {
  private id: number;
  private name: string;
  private filename: string;

  deserializable(input: any) {
    Object.assign(this, input);
    return this;
  }

}
