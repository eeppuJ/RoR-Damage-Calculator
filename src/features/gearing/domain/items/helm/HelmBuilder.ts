import { ItemBuilder } from "@/features/gearing/domain/items/ItemBuilder";
import { Helm } from "@/features/gearing/domain/items/helm/Helm";

export class HelmBuilder extends ItemBuilder<Helm> {
  static helm(): HelmBuilder {
    return new HelmBuilder();
  }

  static noHelm(): Helm {
    return new HelmBuilder().build();
  }

  build(): Helm {
    return new Helm(this);
  }
}
