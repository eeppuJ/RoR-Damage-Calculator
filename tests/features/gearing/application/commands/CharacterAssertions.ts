import type { Character } from "@/features/gearing/domain/Character";
import { expect } from "vitest";
import { Strength } from "@/features/gearing/domain/stats/Strength";
import { BallisticSkill } from "@/features/gearing/domain/stats/BallisticSkill";
import { Intelligence } from "@/features/gearing/domain/stats/Intelligence";
import { Toughness } from "@/features/gearing/domain/stats/Toughness";
import { WeaponSkill } from "@/features/gearing/domain/stats/WeaponSkill";
import { Initiative } from "@/features/gearing/domain/stats/Initiative";
import { Willpower } from "@/features/gearing/domain/stats/Willpower";
import { Wounds } from "@/features/gearing/domain/stats/Wounds";

export function expectCharacter(
  character: Character | undefined
): CharacterAssertions {
  return new CharacterAssertions(character);
}

export class CharacterAssertions {
  private readonly character: Character | undefined;

  constructor(character: Character | undefined) {
    this.character = character;
  }

  hasStrengthEqualTo(strengthExpected: number): CharacterAssertions {
    expect(this.character?.strength()).toStrictEqual(
      new Strength(strengthExpected)
    );
    return this;
  }

  hasBallisticSkillEqualTo(
    ballisticSkillExpected: number
  ): CharacterAssertions {
    expect(this.character?.ballisticSkill()).toStrictEqual(
      new BallisticSkill(ballisticSkillExpected)
    );
    return this;
  }

  hasIntelligenceEqualTo(intelligenceExpected: number): CharacterAssertions {
    expect(this.character?.intelligence()).toStrictEqual(
      new Intelligence(intelligenceExpected)
    );
    return this;
  }

  hasToughnessEqualTo(toughnessExpected: number): CharacterAssertions {
    expect(this.character?.toughness()).toStrictEqual(
      new Toughness(toughnessExpected)
    );
    return this;
  }

  hasWeaponSkillEqualTo(weaponSkillExpected: number): CharacterAssertions {
    expect(this.character?.weaponSkill()).toStrictEqual(
      new WeaponSkill(weaponSkillExpected)
    );
    return this;
  }

  hasInitiativeEqualTo(initiativeExpected: number): CharacterAssertions {
    expect(this.character?.initiative()).toStrictEqual(
      new Initiative(initiativeExpected)
    );
    return this;
  }

  hasWillpowerEqualTo(willpowerExpected: number): CharacterAssertions {
    expect(this.character?.willpower()).toStrictEqual(
      new Willpower(willpowerExpected)
    );
    return this;
  }

  hasWoundsEqualTo(woundsExpected: number): CharacterAssertions {
    expect(this.character?.wounds()).toStrictEqual(new Wounds(woundsExpected));
    return this;
  }
}
