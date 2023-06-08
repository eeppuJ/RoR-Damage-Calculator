import { Boots } from "@/features/gearing/domain/items/boots/Boots";
import { ItemBuilder } from "@/features/gearing/domain/items/ItemBuilder";

export class BootsBuilder extends ItemBuilder<Boots> {
  static boots(): BootsBuilder {
    return new BootsBuilder();
  }

  static noBoots(): Boots {
    return new BootsBuilder().build();
  }

  build(): Boots {
    return new Boots(this);
  }
}
