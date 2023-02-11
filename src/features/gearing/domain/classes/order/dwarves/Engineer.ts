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

export const ENGINEER_ID = 1;
export class Engineer implements RoRClass {
  readonly classId: ClassId = new ClassId(ENGINEER_ID);
  readonly strength: Strength = new Strength(137);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(221);
  readonly initiative: Initiative = new Initiative(196);
  readonly intelligence: Intelligence = new Intelligence(74);
  readonly toughness: Toughness = new Toughness(172);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(108);
  readonly willpower: Willpower = new Willpower(123);
  readonly wounds: Wounds = new Wounds(440);
}
