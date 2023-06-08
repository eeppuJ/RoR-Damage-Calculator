import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class Strength extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }

  of(value: number): PrimaryStats {
    return new Strength(value);
  }
}
