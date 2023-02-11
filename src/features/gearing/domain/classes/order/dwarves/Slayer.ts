import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { ClassId } from "@/features/gearing/domain/ClassId";
import { Strength } from "@/features/gearing/domain/stats/Strength";
import { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import { Initiative } from "@/features/gearing/domain/stats/Initiative";
import { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import { Toughness } from "@/features/gearing/domain/stats/Toughness";
import { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import { Willpower } from "@/features/gearing/domain/stats/Willpower";
import { Wounds } from "@/features/gearing/domain/stats/Wounds";

export const SLAYER_ID = 4;
export class Slayer implements RoRClass {
  readonly classId: ClassId = new ClassId(SLAYER_ID);
  readonly strength: Strength = new Strength(221);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(96);
  readonly initiative: Initiative = new Initiative(148);
  readonly intelligence: Intelligence = new Intelligence(72);
  readonly toughness: Toughness = new Toughness(172);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(197);
  readonly willpower: Willpower = new Willpower(123);
  readonly wounds: Wounds = new Wounds(518);
}
