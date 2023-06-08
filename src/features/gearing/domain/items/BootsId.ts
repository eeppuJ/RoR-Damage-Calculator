import assert from "assert";

export class BootsId {
  readonly id: number;

  constructor(id: number) {
    assert(id !== null, `Boots ID ${id} can not be null`);
    assert(id > 0, `Boots ID ${id} can not be negative`);
    this.id = id;
  }

  equals(bootsId: BootsId) {
    return this.id == bootsId.id;
  }
}
