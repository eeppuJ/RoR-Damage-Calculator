import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import type { Strength } from "@/features/gearing/domain/stats/Strength";
import type { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import type { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import type { Toughness } from "@/features/gearing/domain/stats/Toughness";
import type { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import type { Initiative } from "@/features/gearing/domain/stats/Initiative";
import type { Willpower } from "@/features/gearing/domain/stats/Willpower";
import type { Wounds } from "@/features/gearing/domain/stats/Wounds";
import type { ItemBuilder } from "@/features/gearing/domain/items/ItemBuilder";
import type { ItemId } from "@/features/gearing/domain/items/ItemId";

export abstract class Item {
  readonly itemId: ItemId;
  readonly rorClass: RoRClass;
  readonly strength: Strength;
  readonly ballisticSkill: BallisticSkill;
  readonly intelligence: Intelligence;
  readonly toughness: Toughness;
  readonly weaponSkill: WeaponSkill;
  readonly initiative: Initiative;
  readonly willpower: Willpower;
  readonly wounds: Wounds;

  protected constructor(builder: ItemBuilder<Item>) {
    this.itemId = builder.itemId;
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

  hasId(itemId: ItemId): Boolean {
    return this.itemId.equals(itemId);
  }
}
