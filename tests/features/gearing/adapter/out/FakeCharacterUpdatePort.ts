import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { Character } from "@/features/gearing/domain/Character";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";

export class FakeCharacterUpdatePort implements CharacterUpdaterPort {
  public savedCharacter: Character = new CharacterBuilder().build();

  save(character: Character): void {
    this.savedCharacter = character;
  }
}
