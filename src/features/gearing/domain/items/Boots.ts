import { BootsId } from "./BootsId";
import { Strength } from "@/features/gearing/domain/stats/Strength";
import { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import { Toughness } from "@/features/gearing/domain/stats/Toughness";
import { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import { Initiative } from "@/features/gearing/domain/stats/Initiative";
import { Willpower } from "@/features/gearing/domain/stats/Willpower";
import { Wounds } from "@/features/gearing/domain/stats/Wounds";
import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { NoRoRClass } from "@/features/gearing/domain/NoRoRClass";

export class Boots {
  readonly bootsId: BootsId;
  readonly rorClass: RoRClass;
  readonly strength: Strength;
  readonly ballisticSkill: BallisticSkill;
  readonly intelligence: Intelligence;
  readonly toughness: Toughness;
  readonly weaponSkill: WeaponSkill;
  readonly initiative: Initiative;
  readonly willpower: Willpower;
  readonly wounds: Wounds;

  constructor(builder: BootsBuilder) {
    this.bootsId = builder.bootsId;
    this.rorClass = builder.rorClass;
    this.strength = builder.strength;
    this.ballisticSkill = builder.ballisticSkill;
    this.intelligence = builder.intelligence;
    this.toughness = builder.toughness;
    this.weaponSkill = builder.weaponSkill;
    this.initiative = builder.initiative;
    this.willpower = builder.willpower;
    this.wounds = builder.wounds;
  }

  hasId(bootsId: BootsId): Boolean {
    return this.bootsId.equals(bootsId);
  }
}

export class BootsBuilder {
  bootsId: BootsId = new BootsId(1);
  strength: Strength = new Strength(0);
  ballisticSkill: BallisticSkill = new BallisticSkill(0);
  intelligence: Intelligence = new Intelligence(0);
  toughness: Toughness = new Toughness(0);
  weaponSkill: WeaponSkill = new WeaponSkill(0);
  initiative: Initiative = new Initiative(0);
  willpower: Willpower = new Willpower(0);
  wounds: Wounds = new Wounds(0);
  rorClass: RoRClass = new NoRoRClass();

  withId(bootsId: number): BootsBuilder {
    this.bootsId = new BootsId(bootsId);
    return this;
  }

  withStrength(newStrength: number): BootsBuilder {
    this.strength = new Strength(newStrength);
    return this;
  }

  withBallisticSkill(newBallisticSkill: number): BootsBuilder {
    this.ballisticSkill = new BallisticSkill(newBallisticSkill);
    return this;
  }

  withIntelligence(newIntelligence: number): BootsBuilder {
    this.intelligence = new Intelligence(newIntelligence);
    return this;
  }

  withToughness(newToughness: number): BootsBuilder {
    this.toughness = new Toughness(newToughness);
    return this;
  }

  withWeaponSkill(newWeaponSkill: number): BootsBuilder {
    this.weaponSkill = new WeaponSkill(newWeaponSkill);
    return this;
  }

  withInitiative(newInitiative: number): BootsBuilder {
    this.initiative = new Initiative(newInitiative);
    return this;
  }

  withWillpower(newWillpower: number): BootsBuilder {
    this.willpower = new Willpower(newWillpower);
    return this;
  }

  withWounds(newWounds: number): BootsBuilder {
    this.wounds = new Wounds(newWounds);
    return this;
  }

  build(): Boots {
    return new Boots(this);
  }

  static boots(): BootsBuilder {
    return new BootsBuilder();
  }

  static noBoots(): Boots {
    return new BootsBuilder().build();
  }

  for(rorClass: RoRClass): BootsBuilder {
    this.rorClass = rorClass;
    return this;
  }
}
