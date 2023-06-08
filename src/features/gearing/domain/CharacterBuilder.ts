import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { NoRoRClass } from "@/features/gearing/domain/NoRoRClass";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import type { Boots } from "@/features/gearing/domain/items/boots/Boots";
import { BootsBuilder } from "@/features/gearing/domain/items/boots/BootsBuilder";
import type { Helm } from "@/features/gearing/domain/items/helm/Helm";
import { HelmBuilder } from "@/features/gearing/domain/items/helm/HelmBuilder";
import { Character } from "@/features/gearing/domain/Character";

export class CharacterBuilder {
  rorClass: RoRClass = new NoRoRClass();
  characterId: CharacterId = new CharacterId(99);
  boots: Boots = BootsBuilder.noBoots();
  helm: Helm = HelmBuilder.noHelm();

  withRoRClass(rorClass: RoRClass): CharacterBuilder {
    this.rorClass = rorClass;
    return this;
  }

  withCharacterId(characterId: CharacterId): CharacterBuilder {
    this.characterId = characterId;
    return this;
  }

  build(): Character {
    return new Character(this);
  }
}
