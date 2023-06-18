import type { CharacterId } from "@/features/gearing/domain/CharacterId";
import { CanNotEquipError } from "@/features/gearing/domain/items/CanNotEquipError";
import type { ItemId } from "@/features/gearing/domain/items/ItemId";

export class CanNotEquipBeltError extends CanNotEquipError {
  constructor(characterId: CharacterId, itemId: ItemId) {
    super(characterId, itemId, "belt");
  }
}
