import type {
  ChooseClass,
  ChooseClassCommand,
} from "@/features/gearing/application/commands/port/characters/in/ChooseClass";
import { UnknownCharacterError } from "@/features/gearing/application/commands/port/characters/UnknownCharacterError";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import { RoRClassesFactory } from "@/features/gearing/domain/classes/RoRClassesFactory";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";

export class ChooseClassService implements ChooseClass {
  private readonly loadCharacterPort: LoadCharacterPort;
  private readonly characterUpdaterPort: CharacterUpdaterPort;
  private readonly rorClassesFactory: RoRClassesFactory =
    new RoRClassesFactory();

  constructor(
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    this.loadCharacterPort = loadCharacterPort;
    this.characterUpdaterPort = characterUpdaterPort;
  }

  handle(chooseClassCommand: ChooseClassCommand): void {
    const rorClass = this.rorClassesFactory.of(chooseClassCommand.classId);
    const character = this.loadCharacterPort.load(
      chooseClassCommand.characterId
    );
    if (character == undefined) {
      throw new UnknownCharacterError(chooseClassCommand.characterId);
    }
    character.rorClass = rorClass;
    this.characterUpdaterPort.save(character);
  }
}
