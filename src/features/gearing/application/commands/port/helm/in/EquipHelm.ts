import { HelmId } from "@/features/gearing/domain/items/helm/HelmId";
import { EquipItemCommand } from "@/features/gearing/application/commands/port/items/in/EquipItem";

export class EquipHelmCommand extends EquipItemCommand {
  constructor(helmId: number, characterId: number) {
    super(new HelmId(helmId), characterId);
  }
}
