import type { CharacterId } from "@/features/gearing/domain/CharacterId";
import type { ItemId } from "@/features/gearing/domain/items/ItemId";

export abstract class CanNotEquipError extends Error {
  protected constructor(
    characterId: CharacterId,
    itemId: ItemId,
    itemType: String
  ) {
    super(
      `The character with ID ${characterId.id} can't equip the ${itemType} with ID ${itemId.id}`
    );
  }
}
