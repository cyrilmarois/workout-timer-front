import { Deserializable } from '../core/deserializable';

export class Type implements Deserializable {
  id: number;
  slug: string;

  deserializable(input: any) {
    Object.assign(this, input);
    return this;
  }
}
