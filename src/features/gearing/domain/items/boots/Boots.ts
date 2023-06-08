import type { BootsBuilder } from "@/features/gearing/domain/items/boots/BootsBuilder";
import { Item } from "@/features/gearing/domain/items/Item";

export class Boots extends Item {
  constructor(builder: BootsBuilder) {
    super(builder);
  }
}
