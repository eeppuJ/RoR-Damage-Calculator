import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { NullRoRClass } from "@/features/gearing/domain/NullRoRClass";
import type { Strength } from "@/features/gearing/domain/stats/Strength";
import type { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import type { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import type { Toughness } from "@/features/gearing/domain/stats/Toughness";
import type { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import type { Initiative } from "@/features/gearing/domain/stats/Initiative";
import type { Willpower } from "@/features/gearing/domain/stats/Willpower";
import type { Wounds } from "@/features/gearing/domain/stats/Wounds";
import { CharacterId } from "@/features/gearing/domain/CharacterId";

export class Character {
  rorClass: RoRClass;
  private characterId: CharacterId;

  constructor(builder: CharacterBuilder = new CharacterBuilder()) {
    this.rorClass = builder.rorClass;
    this.characterId = builder.characterId;
  }

  hasId(characterId: CharacterId): Boolean {
    return this.characterId == characterId;
  }

  hasSameId(character: Character): Boolean {
    return this.hasId(character.characterId);
  }

  strength(): Strength {
    return this.rorClass.strength;
  }

  ballisticSkill(): BallisticSkill {
    return this.rorClass.ballisticSkill;
  }

  intelligence(): Intelligence {
    return this.rorClass.intelligence;
  }

  toughness(): Toughness {
    return this.rorClass.toughness;
  }

  weaponSkill(): WeaponSkill {
    return this.rorClass.weaponSkill;
  }

  initiative(): Initiative {
    return this.rorClass.initiative;
  }

  willpower(): Willpower {
    return this.rorClass.willpower;
  }

  wounds(): Wounds {
    return this.rorClass.wounds;
  }
}

export class CharacterBuilder {
  rorClass: RoRClass = new NullRoRClass();
  characterId: CharacterId = new CharacterId(99);

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
