import { expect, test } from "vitest";
import {
  ATTACKER_ID,
  InMemoryCharacterAdapter,
} from "@/features/gearing/adapter/out/InMemoryCharacterAdapter";
import { expectCharacter } from "../CharacterAssertions";
import { Shaman } from "@/features/gearing/domain/classes/destruction/greenskins/Shaman";
import { NoRoRClass } from "@/features/gearing/domain/classes/NoRoRClass";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";
import { BeltBuilder } from "@/features/gearing/domain/items/belt/BeltBuilder";
import type { LoadBeltPort } from "@/features/gearing/application/commands/port/belt/out/LoadBeltPort";
import { InMemoryBeltAdapter } from "@/features/gearing/adapter/out/InMemoryBeltAdapter";
import { EquipBeltService } from "@/features/gearing/application/commands/port/belt/EquipBeltService";
import { EquipBeltCommand } from "@/features/gearing/application/commands/port/belt/in/EquipBeltCommand";
import { BeltId } from "@/features/gearing/domain/items/belt/BeltId";

const loadBeltPort: LoadBeltPort = new InMemoryBeltAdapter([
  BeltBuilder.belt()
    .for(new NoRoRClass())
    .withId(new BeltId(2))
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
const equipBeltService = new EquipBeltService(
  loadBeltPort,
  inMemoryCharacterAdapter,
  inMemoryCharacterAdapter
);

test("For an unknown belt, should throw an exception", () => {
  expect(() => {
    equipBeltService.handle(new EquipBeltCommand(1, 1));
  }).toThrowError("Unknown belt with ID : 1");
});

test("For an unknown character, should throw an exception", () => {
  expect(() => {
    equipBeltService.handle(new EquipBeltCommand(2, 999));
  }).toThrowError("Unknown character with ID : 999");
});

test("For a belt from a different class, should throw an exception", () => {
  expect(() => {
    const inMemoryCharacterAdapter = new InMemoryCharacterAdapter();
    const equipBeltService = new EquipBeltService(
      loadBeltPort,
      inMemoryCharacterAdapter,
      inMemoryCharacterAdapter
    );
    const shaman = new CharacterBuilder()
      .withCharacterId(ATTACKER_ID)
      .withRoRClass(new Shaman())
      .build();
    inMemoryCharacterAdapter.save(shaman);

    equipBeltService.handle(new EquipBeltCommand(2, 1));
  }).toThrowError("The character with ID 1 can't equip the belt with ID 2");
});

test("For belt with stats, the character should have new stats", () => {
  equipBeltService.handle(new EquipBeltCommand(2, 1));

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
