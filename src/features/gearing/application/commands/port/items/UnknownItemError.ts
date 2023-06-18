import type { ItemId } from "@/features/gearing/domain/items/ItemId";

export class UnknownItemError extends Error {
  constructor(itemId: ItemId, itemType: String) {
    super(`Unknown ${itemType} with ID : ${itemId.id}`);
  }
}
