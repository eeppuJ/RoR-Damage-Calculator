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

export const BLACK_GUARD_ID = 17;
export class BlackGuard implements RoRClass {
  readonly classId: ClassId = new ClassId(BLACK_GUARD_ID);
  readonly strength: Strength = new Strength(147);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(98);
  readonly initiative: Initiative = new Initiative(162);
  readonly intelligence: Intelligence = new Intelligence(74);
  readonly toughness: Toughness = new Toughness(182);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(216);
  readonly willpower: Willpower = new Willpower(133);
  readonly wounds: Wounds = new Wounds(606);
}
