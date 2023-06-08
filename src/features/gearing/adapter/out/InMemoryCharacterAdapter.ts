import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { Character } from "@/features/gearing/domain/Character";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";

export const ATTACKER_ID = new CharacterId(1);
export const TARGET_ID = new CharacterId(2);

export class InMemoryCharacterAdapter
  implements CharacterUpdaterPort, LoadCharacterPort
{
  private characters: Character[] = [
    new CharacterBuilder().withCharacterId(ATTACKER_ID).build(),
    new CharacterBuilder().withCharacterId(TARGET_ID).build(),
  ];

  save(character: Character): void {
    const indexOfCharacter = this.characters.findIndex((aCharacter) =>
      aCharacter.hasSameId(character)
    );
    if (indexOfCharacter != -1) {
      this.characters[indexOfCharacter] = character;
    }
  }

  load(characterId: CharacterId): Character | undefined {
    return this.characters.find((character) => character.hasId(characterId));
  }
}
