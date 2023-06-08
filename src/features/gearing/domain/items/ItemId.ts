import assert from "assert";

export class ItemId {
  readonly id: number;

  constructor(id: number) {
    assert(id !== null, `Item ID ${id} can not be null`);
    assert(id > 0, `Item ID ${id} can not be negative`);
    this.id = id;
  }
}
