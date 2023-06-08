import type { LoadBootsPort } from "@/features/gearing/application/commands/port/out/LoadBootsPort";
import type { Boots } from "@/features/gearing/domain/items/Boots";
import type { BootsId } from "@/features/gearing/domain/items/BootsId";

export class InMemoryBootsAdapter implements LoadBootsPort {
  private readonly boots: Boots[] = [];

  constructor(boots: Boots[] = []) {
    this.boots = boots;
  }

  load(bootsId: BootsId): Boots | undefined {
    return this.boots.find((boots) => boots.hasId(bootsId));
  }
}
