import { expect, test } from "vitest";
import {
  ATTACKER_ID,
  InMemoryCharacterAdapter,
} from "@/features/gearing/adapter/out/InMemoryCharacterAdapter";
import { expectCharacter } from "../CharacterAssertions";
import { Shaman } from "@/features/gearing/domain/classes/destruction/greenskins/Shaman";
import { NoRoRClass } from "@/features/gearing/domain/classes/NoRoRClass";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";
import type { LoadHelmPort } from "@/features/gearing/application/commands/port/helm/out/LoadHelmPort";
import { EquipHelmService } from "@/features/gearing/application/commands/port/helm/EquipHelmService";
import { EquipHelmCommand } from "@/features/gearing/application/commands/port/helm/in/EquipHelm";
import { InMemoryHelmAdapter } from "@/features/gearing/adapter/out/InMemoryHelmAdapter";
import { HelmBuilder } from "@/features/gearing/domain/items/helm/HelmBuilder";
import { HelmId } from "@/features/gearing/domain/items/helm/HelmId";

const loadHelmPort: LoadHelmPort = new InMemoryHelmAdapter([
  HelmBuilder.helm()
    .for(new NoRoRClass())
    .withId(new HelmId(2))
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
const equipHelmService = new EquipHelmService(
  loadHelmPort,
  inMemoryCharacterAdapter,
  inMemoryCharacterAdapter
);

test("For an unknown helm, should throw an exception", () => {
  expect(() => {
    equipHelmService.handle(new EquipHelmCommand(1, 1));
  }).toThrowError("Unknown helm with ID : 1");
});

test("For an unknown character, should throw an exception", () => {
  expect(() => {
    equipHelmService.handle(new EquipHelmCommand(2, 999));
  }).toThrowError("Unknown character with ID : 999");
});

test("For boots from a different class, should throw an exception", () => {
  expect(() => {
    const inMemoryCharacterAdapter = new InMemoryCharacterAdapter();
    const equipHelmService = new EquipHelmService(
      loadHelmPort,
      inMemoryCharacterAdapter,
      inMemoryCharacterAdapter
    );
    const shaman = new CharacterBuilder()
      .withCharacterId(ATTACKER_ID)
      .withRoRClass(new Shaman())
      .build();
    inMemoryCharacterAdapter.save(shaman);

    equipHelmService.handle(new EquipHelmCommand(2, 1));
  }).toThrowError("The character with ID 1 can't equip the helm with ID 2");
});

test("For helm with stats, the character should have new stats", () => {
  equipHelmService.handle(new EquipHelmCommand(2, 1));

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
