import { Strength } from "@/features/gearing/domain/stats/Strength";
import { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import { Toughness } from "@/features/gearing/domain/stats/Toughness";
import { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import { Initiative } from "@/features/gearing/domain/stats/Initiative";
import { Willpower } from "@/features/gearing/domain/stats/Willpower";
import { Wounds } from "@/features/gearing/domain/stats/Wounds";
import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { NoRoRClass } from "@/features/gearing/domain/classes/NoRoRClass";
import { ItemId } from "@/features/gearing/domain/items/ItemId";

export abstract class ItemBuilder<T> {
  itemId: ItemId = new ItemId(1);
  strength: Strength = new Strength(0);
  ballisticSkill: BallisticSkill = new BallisticSkill(0);
  intelligence: Intelligence = new Intelligence(0);
  toughness: Toughness = new Toughness(0);
  weaponSkill: WeaponSkill = new WeaponSkill(0);
  initiative: Initiative = new Initiative(0);
  willpower: Willpower = new Willpower(0);
  wounds: Wounds = new Wounds(0);
  rorClass: RoRClass = new NoRoRClass();

  abstract build(): T;

  withId<ID extends ItemId>(newId: ID): ItemBuilder<T> {
    this.itemId = newId;
    return this;
  }

  withStrength(newStrength: number): ItemBuilder<T> {
    this.strength = new Strength(newStrength);
    return this;
  }

  withBallisticSkill(newBallisticSkill: number): ItemBuilder<T> {
    this.ballisticSkill = new BallisticSkill(newBallisticSkill);
    return this;
  }

  withIntelligence(newIntelligence: number): ItemBuilder<T> {
    this.intelligence = new Intelligence(newIntelligence);
    return this;
  }

  withToughness(newToughness: number): ItemBuilder<T> {
    this.toughness = new Toughness(newToughness);
    return this;
  }

  withWeaponSkill(newWeaponSkill: number): ItemBuilder<T> {
    this.weaponSkill = new WeaponSkill(newWeaponSkill);
    return this;
  }

  withInitiative(newInitiative: number): ItemBuilder<T> {
    this.initiative = new Initiative(newInitiative);
    return this;
  }

  withWillpower(newWillpower: number): ItemBuilder<T> {
    this.willpower = new Willpower(newWillpower);
    return this;
  }

  withWounds(newWounds: number): ItemBuilder<T> {
    this.wounds = new Wounds(newWounds);
    return this;
  }

  for(rorClass: RoRClass): ItemBuilder<T> {
    this.rorClass = rorClass;
    return this;
  }
}
