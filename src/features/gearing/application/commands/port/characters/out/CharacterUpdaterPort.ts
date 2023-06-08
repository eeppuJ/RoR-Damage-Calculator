import type { Character } from "@/features/gearing/domain/Character";

export interface CharacterUpdaterPort {
  save(character: Character): void;
}
