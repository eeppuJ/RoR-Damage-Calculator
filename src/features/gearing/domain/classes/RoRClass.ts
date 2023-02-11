import type { ClassId } from "@/features/gearing/domain/ClassId";
import type { Strength } from "@/features/gearing/domain/stats/Strength";
import type { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import type { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import type { Toughness } from "@/features/gearing/domain/stats/Toughness";
import type { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import type { Initiative } from "@/features/gearing/domain/stats/Initiative";
import type { Willpower } from "@/features/gearing/domain/stats/Willpower";
import type { Wounds } from "@/features/gearing/domain/stats/Wounds";

export interface RoRClass {
  readonly classId: ClassId;
  readonly strength: Strength;
  readonly ballisticSkill: BallisticSkill;
  readonly intelligence: Intelligence;
  readonly toughness: Toughness;
  readonly weaponSkill: WeaponSkill;
  readonly initiative: Initiative;
  readonly willpower: Willpower;
  readonly wounds: Wounds;
}
