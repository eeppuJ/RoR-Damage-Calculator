import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/out/CharacterUpdaterPort";
import {
  Character,
  CharacterBuilder,
} from "@/features/gearing/domain/Character";

export class FakeCharacterUpdatePort implements CharacterUpdaterPort {
  public savedCharacter: Character = new CharacterBuilder().build();

  save(character: Character): void {
    this.savedCharacter = character;
  }
}
