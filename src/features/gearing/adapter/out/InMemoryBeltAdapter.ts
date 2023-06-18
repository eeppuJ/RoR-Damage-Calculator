import type { BootsId } from "@/features/gearing/domain/items/boots/BootsId";
import type { LoadBeltPort } from "@/features/gearing/application/commands/port/belt/out/LoadBeltPort";
import type { Belt } from "@/features/gearing/domain/items/belt/Belt";

export class InMemoryBeltAdapter implements LoadBeltPort {
  private readonly belts: Belt[] = [];

  constructor(belts: Belt[] = []) {
    this.belts = belts;
  }

  load(beltId: BootsId): Belt | undefined {
    return this.belts.find((belt) => belt.hasId(beltId));
  }
}
