import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class Willpower extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }
}
