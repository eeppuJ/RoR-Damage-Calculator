import type {
  EquipBoots,
  EquipBootsCommand,
} from "@/features/gearing/application/commands/port/boots/in/EquipBoots";
import type { LoadBootsPort } from "@/features/gearing/application/commands/port/boots/out/LoadBootsPort";
import { UnknownBootsError } from "@/features/gearing/application/commands/port/boots/UnknownBootsError";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import { UnknownCharacterError } from "@/features/gearing/application/commands/port/characters/UnknownCharacterError";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";

export class EquipBootsService implements EquipBoots {
  private readonly loadBootsPorts: LoadBootsPort;
  private readonly loadCharacterPort: LoadCharacterPort;
  private readonly characterUpdaterPort: CharacterUpdaterPort;

  constructor(
    loadBootsPort: LoadBootsPort,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    this.loadBootsPorts = loadBootsPort;
    this.loadCharacterPort = loadCharacterPort;
    this.characterUpdaterPort = characterUpdaterPort;
  }

  handle(equipBootsCommand: EquipBootsCommand): void {
    const boots = this.loadBootsPorts.load(equipBootsCommand.bootsId);
    if (boots == undefined) {
      throw new UnknownBootsError(equipBootsCommand.bootsId);
    }
    const character = this.loadCharacterPort.load(
      equipBootsCommand.characterId
    );
    if (character == undefined) {
      throw new UnknownCharacterError(equipBootsCommand.characterId);
    }
    character.equipBoots(boots);
    this.characterUpdaterPort.save(character);
  }
}
