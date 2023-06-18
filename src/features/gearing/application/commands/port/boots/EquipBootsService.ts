import type { LoadBootsPort } from "@/features/gearing/application/commands/port/boots/out/LoadBootsPort";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { Boots } from "@/features/gearing/domain/items/boots/Boots";
import type { Character } from "@/features/gearing/domain/Character";
import { EquipItem } from "@/features/gearing/application/commands/port/items/in/EquipItem";

export class EquipBootsService extends EquipItem<Boots> {
  constructor(
    loadItemPort: LoadBootsPort,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    super(loadItemPort, loadCharacterPort, characterUpdaterPort);
  }

  equipItem(character: Character, item: Boots): void {
    character.equipBoots(item);
  }

  protected itemType: String = "boots";
}
