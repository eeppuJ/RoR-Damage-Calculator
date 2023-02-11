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

export const WHITE_LION_ID = 12;
export class WhiteLion implements RoRClass {
  readonly classId: ClassId = new ClassId(WHITE_LION_ID);
  readonly strength: Strength = new Strength(196);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(74);
  readonly initiative: Initiative = new Initiative(172);
  readonly intelligence: Intelligence = new Intelligence(98);
  readonly toughness: Toughness = new Toughness(147);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(221);
  readonly willpower: Willpower = new Willpower(123);
  readonly wounds: Wounds = new Wounds(518);
}
