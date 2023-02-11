import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class Wounds extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }
}
