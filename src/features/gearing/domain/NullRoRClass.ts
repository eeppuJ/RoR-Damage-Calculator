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

export class NullRoRClass implements RoRClass {
  readonly classId: ClassId = new ClassId(100);
  readonly strength: Strength = new Strength(0);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(0);
  readonly initiative: Initiative = new Initiative(0);
  readonly intelligence: Intelligence = new Intelligence(0);
  readonly toughness: Toughness = new Toughness(0);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(0);
  readonly willpower: Willpower = new Willpower(0);
  readonly wounds: Wounds = new Wounds(0);
}
