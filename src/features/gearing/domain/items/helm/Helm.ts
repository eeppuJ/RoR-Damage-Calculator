import { Item } from "@/features/gearing/domain/items/Item";
import type { HelmBuilder } from "@/features/gearing/domain/items/helm/HelmBuilder";

export class Helm extends Item {
  constructor(builder: HelmBuilder) {
    super(builder);
  }
}
