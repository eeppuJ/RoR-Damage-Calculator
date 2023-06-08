import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { NoRoRClass } from "@/features/gearing/domain/NoRoRClass";
import type { Strength } from "@/features/gearing/domain/stats/Strength";
import type { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import type { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import type { Toughness } from "@/features/gearing/domain/stats/Toughness";
import type { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import type { Initiative } from "@/features/gearing/domain/stats/Initiative";
import type { Willpower } from "@/features/gearing/domain/stats/Willpower";
import type { Wounds } from "@/features/gearing/domain/stats/Wounds";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { Boots, BootsBuilder } from "@/features/gearing/domain/items/Boots";
import { CanNotEquipBootsError } from "@/features/gearing/domain/items/CanNotEquipBoots";

export class Character {
  private readonly characterId: CharacterId;
  rorClass: RoRClass;
  private boots: Boots;

  constructor(builder: CharacterBuilder = new CharacterBuilder()) {
    this.rorClass = builder.rorClass;
    this.characterId = builder.characterId;
    this.boots = builder.boots;
  }

  hasId(characterId: CharacterId): Boolean {
    return this.characterId.equals(characterId);
  }

  hasSameId(character: Character): Boolean {
    return this.hasId(character.characterId);
  }

  strength(): Strength {
    return this.rorClass.strength.add(this.boots.strength);
  }

  ballisticSkill(): BallisticSkill {
    return this.rorClass.ballisticSkill.add(this.boots.ballisticSkill);
  }

  intelligence(): Intelligence {
    return this.rorClass.intelligence.add(this.boots.intelligence);
  }

  toughness(): Toughness {
    return this.rorClass.toughness.add(this.boots.toughness);
  }

  weaponSkill(): WeaponSkill {
    return this.rorClass.weaponSkill.add(this.boots.weaponSkill);
  }

  initiative(): Initiative {
    return this.rorClass.initiative.add(this.boots.initiative);
  }

  willpower(): Willpower {
    return this.rorClass.willpower.add(this.boots.willpower);
  }

  wounds(): Wounds {
    return this.rorClass.wounds.add(this.boots.wounds);
  }

  equipBoots(boots: Boots) {
    if (this.canNotEquip(boots)) {
      throw new CanNotEquipBootsError(this.characterId, boots.bootsId);
    }
    this.boots = boots;
  }

  private canNotEquip(boots: Boots): Boolean {
    return !boots.rorClass.classId.equals(this.rorClass.classId);
  }
}

export class CharacterBuilder {
  rorClass: RoRClass = new NoRoRClass();
  characterId: CharacterId = new CharacterId(99);
  boots: Boots = BootsBuilder.noBoots();

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
