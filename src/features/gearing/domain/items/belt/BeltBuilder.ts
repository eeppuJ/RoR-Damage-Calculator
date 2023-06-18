import { ItemBuilder } from "@/features/gearing/domain/items/ItemBuilder";
import { Belt } from "@/features/gearing/domain/items/belt/Belt";

export class BeltBuilder extends ItemBuilder<Belt> {
  static belt(): BeltBuilder {
    return new BeltBuilder();
  }

  static noBelt(): Belt {
    return new BeltBuilder().build();
  }

  build(): Belt {
    return new Belt(this);
  }
}
