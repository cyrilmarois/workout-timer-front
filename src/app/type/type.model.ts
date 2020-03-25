import { Deserializable } from '../core/deserializable';

export class Type implements Deserializable {
  private id: number;
  private slug: string;

  deserializable(input: any) {
    Object.assign(this, input);
    return this;
  }
}
