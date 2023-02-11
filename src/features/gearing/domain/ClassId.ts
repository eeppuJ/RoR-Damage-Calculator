import assert from "assert";

export class ClassId {
  readonly id: number;

  constructor(id: number) {
    assert(id !== null, `Class ID ${id} can not be null`);
    assert(id > 0, `Class ID ${id} can not be negative`);
    this.id = id;
  }

  public equals(classId: ClassId): boolean {
    return this.id === classId.id;
  }
}
