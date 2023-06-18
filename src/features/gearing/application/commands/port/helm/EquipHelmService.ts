import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { LoadHelmPort } from "@/features/gearing/application/commands/port/helm/out/LoadHelmPort";
import { EquipItem } from "@/features/gearing/application/commands/port/items/in/EquipItem";
import type { Helm } from "@/features/gearing/domain/items/helm/Helm";
import type { Character } from "@/features/gearing/domain/Character";

export class EquipHelmService extends EquipItem<Helm> {
  constructor(
    loadItemPort: LoadHelmPort,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    super(loadItemPort, loadCharacterPort, characterUpdaterPort);
  }

  protected equipItem(character: Character, item: Helm): void {
    character.equipHelm(item);
  }

  protected itemType: String = "helm";
}
