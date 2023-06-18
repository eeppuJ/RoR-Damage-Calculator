import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import type { Strength } from "@/features/gearing/domain/stats/Strength";
import type { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import type { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import type { Toughness } from "@/features/gearing/domain/stats/Toughness";
import type { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import type { Initiative } from "@/features/gearing/domain/stats/Initiative";
import type { Willpower } from "@/features/gearing/domain/stats/Willpower";
import type { Wounds } from "@/features/gearing/domain/stats/Wounds";
import type { CharacterId } from "@/features/gearing/domain/CharacterId";
import type { Boots } from "@/features/gearing/domain/items/boots/Boots";
import { CanNotEquipBootsError } from "@/features/gearing/domain/items/boots/CanNotEquipBoots";
import type { Helm } from "@/features/gearing/domain/items/helm/Helm";
import type { Item } from "@/features/gearing/domain/items/Item";
import { CanNotEquipHelmError } from "@/features/gearing/domain/items/helm/CanNotEquipHelm";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";
import type { Belt } from "@/features/gearing/domain/items/belt/Belt";
import { CanNotEquipBeltError } from "@/features/gearing/domain/items/belt/CanNotEquipBoots";

export class Character {
  private readonly characterId: CharacterId;
  rorClass: RoRClass;
  private boots: Boots;
  private helm: Helm;
  private belt: Belt;

  constructor(builder: CharacterBuilder = new CharacterBuilder()) {
    this.rorClass = builder.rorClass;
    this.characterId = builder.characterId;
    this.boots = builder.boots;
    this.helm = builder.helm;
    this.belt = builder.belt;
  }

  hasId(characterId: CharacterId): Boolean {
    return this.characterId.equals(characterId);
  }

  hasSameId(character: Character): Boolean {
    return this.hasId(character.characterId);
  }

  strength(): Strength {
    return this.rorClass.strength
      .add(this.boots.strength)
      .add(this.helm.strength)
      .add(this.belt.strength);
  }

  ballisticSkill(): BallisticSkill {
    return this.rorClass.ballisticSkill
      .add(this.boots.ballisticSkill)
      .add(this.helm.ballisticSkill)
      .add(this.belt.ballisticSkill);
  }

  intelligence(): Intelligence {
    return this.rorClass.intelligence
      .add(this.boots.intelligence)
      .add(this.helm.intelligence)
      .add(this.belt.intelligence);
  }

  toughness(): Toughness {
    return this.rorClass.toughness
      .add(this.boots.toughness)
      .add(this.helm.toughness)
      .add(this.belt.toughness);
  }

  weaponSkill(): WeaponSkill {
    return this.rorClass.weaponSkill
      .add(this.boots.weaponSkill)
      .add(this.helm.weaponSkill)
      .add(this.belt.weaponSkill);
  }

  initiative(): Initiative {
    return this.rorClass.initiative
      .add(this.boots.initiative)
      .add(this.helm.initiative)
      .add(this.belt.initiative);
  }

  willpower(): Willpower {
    return this.rorClass.willpower
      .add(this.boots.willpower)
      .add(this.helm.willpower)
      .add(this.belt.willpower);
  }

  wounds(): Wounds {
    return this.rorClass.wounds
      .add(this.boots.wounds)
      .add(this.helm.wounds)
      .add(this.belt.wounds);
  }

  equipBoots(boots: Boots) {
    if (this.canNotEquip(boots)) {
      throw new CanNotEquipBootsError(this.characterId, boots.itemId);
    }
    this.boots = boots;
  }

  equipHelm(helm: Helm) {
    if (this.canNotEquip(helm)) {
      throw new CanNotEquipHelmError(this.characterId, helm.itemId);
    }
    this.helm = helm;
  }

  equipBelt(belt: Belt) {
    if (this.canNotEquip(belt)) {
      throw new CanNotEquipBeltError(this.characterId, belt.itemId);
    }
    this.belt = belt;
  }

  private canNotEquip(item: Item): Boolean {
    return !item.rorClass.classId.equals(this.rorClass.classId);
  }
}
