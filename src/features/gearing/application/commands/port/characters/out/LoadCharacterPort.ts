import type { CharacterId } from "@/features/gearing/domain/CharacterId";
import type { Character } from "@/features/gearing/domain/Character";

export interface LoadCharacterPort {
  load(characterId: CharacterId): Character | undefined;
}
