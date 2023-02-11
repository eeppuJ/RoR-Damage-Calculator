import assert from "assert";

export abstract class PrimaryStats {
  readonly value: number;

  protected constructor(value: number) {
    assert(value >= 0);
    this.value = value;
  }
}
