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

export const WITCH_ELF_ID = 20;
export class WitchElf implements RoRClass {
  readonly classId: ClassId = new ClassId(WITCH_ELF_ID);
  readonly strength: Strength = new Strength(172);
  readonly ballisticSkill: BallisticSkill = new BallisticSkill(74);
  readonly initiative: Initiative = new Initiative(221);
  readonly intelligence: Intelligence = new Intelligence(98);
  readonly toughness: Toughness = new Toughness(137);
  readonly weaponSkill: WeaponSkill = new WeaponSkill(196);
  readonly willpower: Willpower = new Willpower(147);
  readonly wounds: Wounds = new Wounds(518);
}
