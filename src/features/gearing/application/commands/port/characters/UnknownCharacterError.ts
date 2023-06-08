import type { CharacterId } from "@/features/gearing/domain/CharacterId";

export class UnknownCharacterError extends Error {
  constructor(characterId: CharacterId) {
    super(`Unknown character with ID : ${characterId.id}`);
  }
}
