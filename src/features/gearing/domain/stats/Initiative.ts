import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class Initiative extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }
}
