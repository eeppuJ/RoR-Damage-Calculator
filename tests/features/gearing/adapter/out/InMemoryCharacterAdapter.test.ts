import { expect, test } from "vitest";
import {
  ATTACKER_ID,
  InMemoryCharacterAdapter,
  TARGET_ID,
} from "@/features/gearing/adapter/out/InMemoryCharacterAdapter";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { WitchElf } from "@/features/gearing/domain/classes/destruction/darkelves/WitchElf";
import { WitchHunter } from "@/features/gearing/domain/classes/order/empire/WitchHunter";
import { Engineer } from "@/features/gearing/domain/classes/order/dwarves/Engineer";
import { CharacterBuilder } from "@/features/gearing/domain/CharacterBuilder";

const inMemoryCharacterAdapter = new InMemoryCharacterAdapter();

test("For a character ID not linked to a character, should get no character", () => {
  const noCharacter = inMemoryCharacterAdapter.load(new CharacterId(4));
  expect(noCharacter).toBeUndefined();
});

test("For a character ID linked to the attacker, should get the attacker character", () => {
  const attackerCharacter = inMemoryCharacterAdapter.load(ATTACKER_ID);
  expect(attackerCharacter).toStrictEqual(
    new CharacterBuilder().withCharacterId(ATTACKER_ID).build()
  );
});

test("For a character ID linked to the target, should get the target character", () => {
  const targetCharacter = inMemoryCharacterAdapter.load(TARGET_ID);
  expect(targetCharacter).toStrictEqual(
    new CharacterBuilder().withCharacterId(TARGET_ID).build()
  );
});

test("Should update the attacker character", () => {
  const newAttacker = new CharacterBuilder()
    .withCharacterId(ATTACKER_ID)
    .withRoRClass(new WitchElf())
    .build();

  inMemoryCharacterAdapter.save(newAttacker);
  const savedAttackerCharacter = inMemoryCharacterAdapter.load(ATTACKER_ID);

  expect(savedAttackerCharacter).toStrictEqual(newAttacker);
});

test("Should update the target character", () => {
  const newTarget = new CharacterBuilder()
    .withCharacterId(TARGET_ID)
    .withRoRClass(new WitchHunter())
    .build();

  inMemoryCharacterAdapter.save(newTarget);
  const savedTargetCharacter = inMemoryCharacterAdapter.load(TARGET_ID);

  expect(savedTargetCharacter).toStrictEqual(newTarget);
});

test("Should do nothing if the character ID is not the attacker ID or the target ID", () => {
  const notAttackerOrTargetCharaterId = new CharacterId(999);
  const notAttackerOrTargetCharacter = new CharacterBuilder()
    .withCharacterId(notAttackerOrTargetCharaterId)
    .withRoRClass(new Engineer())
    .build();

  inMemoryCharacterAdapter.save(notAttackerOrTargetCharacter);
  const noCharacter = inMemoryCharacterAdapter.load(
    notAttackerOrTargetCharaterId
  );

  expect(noCharacter).toBeUndefined();
});
