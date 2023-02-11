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

export const BLACK_ORC_ID = 21;
export class BlackOrc implements RoRClass {
  readonly classId: ClassId = new ClassId(BLACK_ORC_ID);
  readonly strength: Strength = new Strength(172);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(98);
  readonly initiative: Initiative = new Initiative(123);
  readonly intelligence: Intelligence = new Intelligence(74);
  readonly toughness: Toughness = new Toughness(221);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(196);
  readonly willpower: Willpower = new Willpower(147);
  readonly wounds: Wounds = new Wounds(606);
}
