import assert from "assert";

export abstract class PrimaryStats {
  readonly value: number;

  protected constructor(value: number) {
    assert(value >= 0);
    this.value = value;
  }

  abstract of(value: number): PrimaryStats;

  add(stats: PrimaryStats): PrimaryStats {
    return this.of(this.value + stats.value);
  }
}
