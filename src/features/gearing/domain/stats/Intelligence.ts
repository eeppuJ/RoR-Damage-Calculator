import { PrimaryStats } from "@/features/gearing/domain/stats/PrimaryStats";

export class Intelligence extends PrimaryStats {
  constructor(value: number) {
    super(value);
  }

  of(value: number): PrimaryStats {
    return new Intelligence(value);
  }
}
