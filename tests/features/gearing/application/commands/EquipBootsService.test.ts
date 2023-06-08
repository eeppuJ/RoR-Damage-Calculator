import { expect, test } from "vitest";
import { EquipBootsService } from "@/features/gearing/application/commands/EquipBootsService";
import { EquipBootsCommand } from "@/features/gearing/application/commands/port/in/EquipBoots";
import type { LoadBootsPort } from "@/features/gearing/application/commands/port/out/LoadBootsPort";
import { InMemoryBootsAdapter } from "@/features/gearing/adapter/out/InMemoryBootsAdapter";
import { BootsBuilder } from "@/features/gearing/domain/items/Boots";
import {
  ATTACKER_ID,
  InMemoryCharacterAdapter,
} from "@/features/gearing/adapter/out/InMemoryCharacterAdapter";
import { expectCharacter } from "./CharacterAssertions";
import { CharacterBuilder } from "@/features/gearing/domain/Character";
import { Shaman } from "@/features/gearing/domain/classes/destruction/greenskins/Shaman";
import { NoRoRClass } from "@/features/gearing/domain/NoRoRClass";

const loadBootsPort: LoadBootsPort = new InMemoryBootsAdapter([
  BootsBuilder.boots()
    .for(new NoRoRClass())
    .withId(2)
    .withBallisticSkill(20)
    .withStrength(10)
    .withInitiative(99)
    .withWeaponSkill(29)
    .withIntelligence(20)
    .withWounds(22)
    .withWillpower(39)
    .withToughness(30)
    .build(),
]);
const inMemoryCharacterAdapter = new InMemoryCharacterAdapter();
const equipBootsService = new EquipBootsService(
  loadBootsPort,
  inMemoryCharacterAdapter,
  inMemoryCharacterAdapter
);

test("For an unknown boots, should throw an exception", () => {
  expect(() => {
    equipBootsService.handle(new EquipBootsCommand(1, 1));
  }).toThrowError("Unknown boots with ID : 1");
});

test("For an unknown character, should throw an exception", () => {
  expect(() => {
    equipBootsService.handle(new EquipBootsCommand(2, 999));
  }).toThrowError("Unknown character with ID : 999");
});

test("For boots from a different class, should throw an exception", () => {
  expect(() => {
    const inMemoryCharacterAdapter = new InMemoryCharacterAdapter();
    const equipBootsService = new EquipBootsService(
      loadBootsPort,
      inMemoryCharacterAdapter,
      inMemoryCharacterAdapter
    );
    const shaman = new CharacterBuilder()
      .withCharacterId(ATTACKER_ID)
      .withRoRClass(new Shaman())
      .build();
    inMemoryCharacterAdapter.save(shaman);

    equipBootsService.handle(new EquipBootsCommand(2, 1));
  }).toThrowError("The character with ID 1 can't equip the boots with ID 2");
});

test("For boots with stats, the character should have new stats", () => {
  equipBootsService.handle(new EquipBootsCommand(2, 1));

  const character = inMemoryCharacterAdapter.load(ATTACKER_ID);
  expectCharacter(character)
    .hasBallisticSkillEqualTo(20)
    .hasStrengthEqualTo(10)
    .hasInitiativeEqualTo(99)
    .hasWeaponSkillEqualTo(29)
    .hasIntelligenceEqualTo(20)
    .hasToughnessEqualTo(30)
    .hasWillpowerEqualTo(39)
    .hasWoundsEqualTo(22);
});
