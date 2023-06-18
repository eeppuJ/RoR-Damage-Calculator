import type { ItemId } from "@/features/gearing/domain/items/ItemId";
import { CharacterId } from "@/features/gearing/domain/CharacterId";
import { UnknownItemError } from "@/features/gearing/application/commands/port/items/UnknownItemError";
import { UnknownCharacterError } from "@/features/gearing/application/commands/port/characters/UnknownCharacterError";
import type { Character } from "@/features/gearing/domain/Character";
import type { LoadCharacterPort } from "@/features/gearing/application/commands/port/characters/out/LoadCharacterPort";
import type { CharacterUpdaterPort } from "@/features/gearing/application/commands/port/characters/out/CharacterUpdaterPort";
import type { LoadItemPort } from "@/features/gearing/application/commands/port/items/out/LoadItemPort";
import type { Item } from "@/features/gearing/domain/items/Item";

export abstract class EquipItem<T extends Item> {
  private readonly loadItemPort: LoadItemPort<T>;
  private readonly loadCharacterPort: LoadCharacterPort;
  private readonly characterUpdaterPort: CharacterUpdaterPort;

  protected constructor(
    loadItemPort: LoadItemPort<T>,
    loadCharacterPort: LoadCharacterPort,
    characterUpdaterPort: CharacterUpdaterPort
  ) {
    this.loadItemPort = loadItemPort;
    this.loadCharacterPort = loadCharacterPort;
    this.characterUpdaterPort = characterUpdaterPort;
  }

  public handle(equipItemCommand: EquipItemCommand): void {
    const item = this.loadItemPort.load(equipItemCommand.itemId);
    if (item == undefined) {
      throw new UnknownItemError(equipItemCommand.itemId, this.itemType);
    }
    const character = this.loadCharacterPort.load(equipItemCommand.characterId);
    if (character == undefined) {
      throw new UnknownCharacterError(equipItemCommand.characterId);
    }
    this.equipItem(character, item);
    this.characterUpdaterPort.save(character);
  }

  protected abstract equipItem(character: Character, item: T): void;

  protected abstract itemType: String;
}

export abstract class EquipItemCommand {
  readonly itemId: ItemId;
  readonly characterId: CharacterId;

  protected constructor(itemId: ItemId, characterId: number) {
    this.characterId = new CharacterId(characterId);
    this.itemId = itemId;
  }
}
