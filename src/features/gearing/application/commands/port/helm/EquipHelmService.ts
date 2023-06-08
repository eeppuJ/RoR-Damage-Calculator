import type {
  EquipHelm,
  EquipHelmCommand,
} from "@/features/gearing/application/commands/port/helm/in/EquipHelm";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import { UnknownCharacterError } from "@/features/gearing/application/commands/port/characters/UnknownCharacterError";
import type { LoadHelmPort } from "@/features/gearing/application/commands/port/helm/out/LoadHelmPort";
import { UnknownHelmError } from "@/features/gearing/application/commands/port/helm/UnknownHelmError";

export class EquipHelmService implements EquipHelm {
  private readonly loadHelmPort: LoadHelmPort;
  private readonly loadCharacterPort: LoadCharacterPort;
  private readonly characterUpdaterPort: CharacterUpdaterPort;

  constructor(
    loadHelmPort: LoadHelmPort,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    this.loadHelmPort = loadHelmPort;
    this.loadCharacterPort = loadCharacterPort;
    this.characterUpdaterPort = characterUpdaterPort;
  }

  handle(equipHelmCommand: EquipHelmCommand): void {
    const helm = this.loadHelmPort.load(equipHelmCommand.helmId);
    if (helm == undefined) {
      throw new UnknownHelmError(equipHelmCommand.helmId);
    }
    const character = this.loadCharacterPort.load(equipHelmCommand.characterId);
    if (character == undefined) {
      throw new UnknownCharacterError(equipHelmCommand.characterId);
    }
    character.equipHelm(helm);
    this.characterUpdaterPort.save(character);
  }
}
