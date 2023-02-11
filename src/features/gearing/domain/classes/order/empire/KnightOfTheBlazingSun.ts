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

export const KNIGHT_OF_THE_BLAZING_SUN_ID = 6;
export class KnightOfTheBlazingSun implements RoRClass {
  readonly classId: ClassId = new ClassId(KNIGHT_OF_THE_BLAZING_SUN_ID);
  readonly strength: Strength = new Strength(197);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(74);
  readonly initiative: Initiative = new Initiative(123);
  readonly intelligence: Intelligence = new Intelligence(99);
  readonly toughness: Toughness = new Toughness(221);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(172);
  readonly willpower: Willpower = new Willpower(148);
  readonly wounds: Wounds = new Wounds(606);
}
