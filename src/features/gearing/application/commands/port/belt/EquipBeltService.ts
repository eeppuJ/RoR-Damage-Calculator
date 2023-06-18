import { EquipItem } from "@/features/gearing/application/commands/port/items/in/EquipItem";
import type { Belt } from "@/features/gearing/domain/items/belt/Belt";
import type { Character } from "@/features/gearing/domain/Character";
import type { LoadItemPort } from "@/features/gearing/application/commands/port/items/out/LoadItemPort";
import type {
  CharacterUpdaterPort
} from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";

export class EquipBeltService extends EquipItem<Belt> {
  constructor(
    loadItemPort: LoadItemPort<Belt>,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    super(loadItemPort, loadCharacterPort, characterUpdaterPort);
  }

  protected equipItem(character: Character, item: Belt): void {
    character.equipBelt(item);
  }

  protected itemType: String = "belt";
}
