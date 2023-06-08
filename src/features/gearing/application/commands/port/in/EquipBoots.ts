import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { BootsId } from "@/features/gearing/domain/items/boots/BootsId";

export class EquipBootsCommand {
  readonly bootsId: BootsId;
  readonly characterId: CharacterId;

  constructor(bootsId: number, characterId: number) {
    this.bootsId = new BootsId(bootsId);
    this.characterId = new CharacterId(characterId);
  }
}

export interface EquipBoots {
  handle: (equipBootsCommand: EquipBootsCommand) => void;
}
