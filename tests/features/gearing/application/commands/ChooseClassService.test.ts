import { expect, test } from "vitest";
import { ChooseClassCommand } from "@/features/gearing/application/commands/port/in/ChooseClass";
import { ChooseClassService } from "@/features/gearing/application/commands/ChooseClassService";
import { FakeLoadCharacterPort } from "../../adapter/out/FakeLoadCharacterPort";
import { CharacterBuilder } from "@/features/gearing/domain/Character";
import {
  Engineer,
  ENGINEER_ID,
} from "@/features/gearing/domain/classes/order/dwarves/Engineer";
import { FakeCharacterUpdatePort } from "../../adapter/out/FakeCharacterUpdatePort";
import { expectCharacter } from "./CharacterAssertions";
import { SHAMAN_ID } from "@/features/gearing/domain/classes/destruction/greenskins/Shaman";
import { DISCIPLE_OF_KHAINE_ID } from "@/features/gearing/domain/classes/destruction/darkelves/DiscipleOfKhaine";
import { ZEALOT_ID } from "@/features/gearing/domain/classes/destruction/chaos/Zealot";
import { BLACK_GUARD_ID } from "@/features/gearing/domain/classes/destruction/darkelves/BlackGuard";
import { BLACK_ORC_ID } from "@/features/gearing/domain/classes/destruction/greenskins/BlackOrc";
import { CHOSEN_ID } from "@/features/gearing/domain/classes/destruction/chaos/Chosen";
import { WITCH_ELF_ID } from "@/features/gearing/domain/classes/destruction/darkelves/WitchElf";
import { CHOPPA_ID } from "@/features/gearing/domain/classes/destruction/greenskins/Choppa";
import { MARAUDER_ID } from "@/features/gearing/domain/classes/destruction/chaos/Marauder";
import { MAGUS_ID } from "@/features/gearing/domain/classes/destruction/chaos/Magus";
import { SQUIG_HERDER } from "@/features/gearing/domain/classes/destruction/greenskins/SquigHerder";
import { SORCERER_ID } from "@/features/gearing/domain/classes/destruction/darkelves/Sorcerer";
import { ARCHMAGE_ID } from "@/features/gearing/domain/classes/order/highelves/Archmage";
import { RUNEPRIEST_ID } from "@/features/gearing/domain/classes/order/dwarves/Runepriest";
import { WARRIOR_PRIEST_ID } from "@/features/gearing/domain/classes/order/empire/WarriorPriest";
import { KNIGHT_OF_THE_BLAZING_SUN_ID } from "@/features/gearing/domain/classes/order/empire/KnightOfTheBlazingSun";
import { SWORD_MASTER_ID } from "@/features/gearing/domain/classes/order/highelves/SwordMaster";
import { IRONBREAKER_ID } from "@/features/gearing/domain/classes/order/dwarves/Ironbreaker";
import { WHITE_LION_ID } from "@/features/gearing/domain/classes/order/highelves/WhiteLion";
import { WITCH_HUNTER_ID } from "@/features/gearing/domain/classes/order/empire/WitchHunter";
import { SLAYER_ID } from "@/features/gearing/domain/classes/order/dwarves/Slayer";
import { SHADOW_WARRIOR_ID } from "@/features/gearing/domain/classes/order/highelves/ShadowWarrior";
import { BRIGHT_WIZARD_ID } from "@/features/gearing/domain/classes/order/empire/BrightWizard";

const UNKNOWN_CLASS_ID = 29;
const UNKNOWN_CHARACTER_ID = 3;
const ATTACKER_ID = 1;

const loadCharacterPort = new FakeLoadCharacterPort();
const characterUpdaterPort = new FakeCharacterUpdatePort();
const chooseClassService = new ChooseClassService(
  loadCharacterPort,
  characterUpdaterPort
);

test("For an unknown class, should throw an exception", () => {
  expect(() => {
    chooseClassService.handle(
      new ChooseClassCommand(UNKNOWN_CLASS_ID, ATTACKER_ID)
    );
  }).toThrowError("Unknown class with ID : 29");
});

test("For an unknown character, should throw an exception", () => {
  expect(() => {
    chooseClassService.handle(
      new ChooseClassCommand(ENGINEER_ID, UNKNOWN_CHARACTER_ID)
    );
  }).toThrowError("Unknown character with ID : 3");
});

test("Should set the class to the character", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(ENGINEER_ID, ATTACKER_ID));

  expect(characterUpdaterPort.savedCharacter).toEqual(
    new CharacterBuilder().withRoRClass(new Engineer())
  );
});

test("Should set base stats for Engineer", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(ENGINEER_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(137)
    .hasBallisticSkillEqualTo(221)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(172)
    .hasWeaponSkillEqualTo(108)
    .hasInitiativeEqualTo(196)
    .hasWillpowerEqualTo(123)
    .hasWoundsEqualTo(440);
});

test("Should set base stats for Bright Wizard", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(BRIGHT_WIZARD_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(99)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(221)
    .hasToughnessEqualTo(148)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(197)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Shadow Warrior", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(SHADOW_WARRIOR_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(221)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(123)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(147)
    .hasWillpowerEqualTo(98)
    .hasWoundsEqualTo(440);
});

test("Should set base stats for Slayer", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(SLAYER_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(221)
    .hasBallisticSkillEqualTo(96)
    .hasIntelligenceEqualTo(72)
    .hasToughnessEqualTo(172)
    .hasWeaponSkillEqualTo(197)
    .hasInitiativeEqualTo(148)
    .hasWillpowerEqualTo(123)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for Witch Hunter", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(WITCH_HUNTER_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(123)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(142)
    .hasWeaponSkillEqualTo(226)
    .hasInitiativeEqualTo(196)
    .hasWillpowerEqualTo(118)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for White Lion", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(WHITE_LION_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(196)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(98)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(221)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(123)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for Ironbreaker", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(IRONBREAKER_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(147)
    .hasBallisticSkillEqualTo(98)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(221)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(172)
    .hasWoundsEqualTo(606);
});

test("Should set base stats for Sword Master", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(SWORD_MASTER_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(219)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(123)
    .hasToughnessEqualTo(196)
    .hasWeaponSkillEqualTo(237)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(98)
    .hasWoundsEqualTo(610);
});

test("Should set base stats for Knight of the Blazing Sun", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(KNIGHT_OF_THE_BLAZING_SUN_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(197)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(99)
    .hasToughnessEqualTo(221)
    .hasWeaponSkillEqualTo(172)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(148)
    .hasWoundsEqualTo(606);
});

test("Should set base stats for Warrior Priest", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(WARRIOR_PRIEST_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(99)
    .hasToughnessEqualTo(148)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(221)
    .hasWoundsEqualTo(440);
});

test("Should set base stats for Runepriest", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(RUNEPRIEST_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(98)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(226)
    .hasToughnessEqualTo(172)
    .hasWeaponSkillEqualTo(120)
    .hasInitiativeEqualTo(147)
    .hasWillpowerEqualTo(222)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Archmage", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(ARCHMAGE_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(98)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(196)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(221)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Sorcerer", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(SORCERER_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(98)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(221)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(196)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Squig Herder", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(SQUIG_HERDER, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(147)
    .hasBallisticSkillEqualTo(225)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(123)
    .hasWeaponSkillEqualTo(188)
    .hasInitiativeEqualTo(196)
    .hasWillpowerEqualTo(98)
    .hasWoundsEqualTo(444);
});

test("Should set base stats for Magus", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(MAGUS_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(98)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(221)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(196)
    .hasWillpowerEqualTo(172)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Marauder", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(MARAUDER_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(237)
    .hasBallisticSkillEqualTo(99)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(148)
    .hasWeaponSkillEqualTo(188)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(197)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for Choppa", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(CHOPPA_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(221)
    .hasBallisticSkillEqualTo(98)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(172)
    .hasInitiativeEqualTo(196)
    .hasWillpowerEqualTo(123)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for Witch Elf", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(WITCH_ELF_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(98)
    .hasToughnessEqualTo(137)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(221)
    .hasWillpowerEqualTo(147)
    .hasWoundsEqualTo(518);
});

test("Should set base stats for Chosen", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(CHOSEN_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(197)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(99)
    .hasToughnessEqualTo(221)
    .hasWeaponSkillEqualTo(172)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(148)
    .hasWoundsEqualTo(606);
});

test("Should set base stats for Black Orc", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(BLACK_ORC_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(98)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(221)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(147)
    .hasWoundsEqualTo(606);
});

test("Should set base stats for Black Guard", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(BLACK_GUARD_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(147)
    .hasBallisticSkillEqualTo(98)
    .hasIntelligenceEqualTo(74)
    .hasToughnessEqualTo(182)
    .hasWeaponSkillEqualTo(216)
    .hasInitiativeEqualTo(162)
    .hasWillpowerEqualTo(133)
    .hasWoundsEqualTo(606);
});

test("Should set base stats for Zealot", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(ZEALOT_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(99)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(196)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(221)
    .hasWoundsEqualTo(391);
});

test("Should set base stats for Disciple of Khaine", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(
    new ChooseClassCommand(DISCIPLE_OF_KHAINE_ID, ATTACKER_ID)
  );

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(172)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(98)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(196)
    .hasInitiativeEqualTo(123)
    .hasWillpowerEqualTo(221)
    .hasWoundsEqualTo(440);
});

test("Should set base stats for Shaman", () => {
  loadCharacterPort.withCharacterFor(ATTACKER_ID);
  chooseClassService.handle(new ChooseClassCommand(SHAMAN_ID, ATTACKER_ID));

  expectCharacter(characterUpdaterPort.savedCharacter)
    .hasStrengthEqualTo(98)
    .hasBallisticSkillEqualTo(74)
    .hasIntelligenceEqualTo(196)
    .hasToughnessEqualTo(147)
    .hasWeaponSkillEqualTo(123)
    .hasInitiativeEqualTo(172)
    .hasWillpowerEqualTo(221)
    .hasWoundsEqualTo(391);
});
