import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/out/LoadCharacterPort";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import {
  Character,
  CharacterBuilder,
} from "@/features/gearing/domain/Character";

export class FakeLoadCharacterPort implements LoadCharacterPort {
  private knownCharacterId: CharacterId = new CharacterId(99);

  load(characterId: CharacterId): Character | undefined {
    if (characterId.equals(this.knownCharacterId)) {
      return new CharacterBuilder().build();
    }
    return undefined;
  }

  withCharacterFor(id: number) {
    this.knownCharacterId = new CharacterId(id);
  }
}
