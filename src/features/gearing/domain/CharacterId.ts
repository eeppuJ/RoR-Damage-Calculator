import assert from "assert";

export class CharacterId {
  readonly id: number;

  constructor(characterId: number) {
    assert(characterId !== null, "Character ID can not be null");
    assert(characterId > 0, `Character ID can not be negative`);
    this.id = characterId;
  }

  equals(characterId: CharacterId) {
    return this.id == characterId.id;
  }
}
