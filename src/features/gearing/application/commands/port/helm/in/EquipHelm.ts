import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { HelmId } from "@/features/gearing/domain/items/helm/HelmId";

export class EquipHelmCommand {
  readonly helmId: HelmId;
  readonly characterId: CharacterId;

  constructor(helmId: number, characterId: number) {
    this.helmId = new HelmId(helmId);
    this.characterId = new CharacterId(characterId);
  }
}

export interface EquipHelm {
  handle: (equipHelmCommand: EquipHelmCommand) => void;
}
