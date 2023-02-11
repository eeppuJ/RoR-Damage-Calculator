import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/out/CharacterUpdaterPort";
import {
  Character,
  CharacterBuilder,
} from "@/features/gearing/domain/Character";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/out/LoadCharacterPort";
import { CharacterId } from "@/features/gearing/domain/CharacterId";

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
