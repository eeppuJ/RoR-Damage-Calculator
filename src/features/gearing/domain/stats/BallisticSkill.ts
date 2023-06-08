import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class BallisticSkill extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }

  of(value: number): PrimaryStats {
    return new BallisticSkill(value);
  }
}
