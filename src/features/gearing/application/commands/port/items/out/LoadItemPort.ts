import type { ItemId } from "@/features/gearing/domain/items/ItemId";
import type { Item } from "@/features/gearing/domain/items/Item";

export interface LoadItemPort<T extends Item> {
  load(itemId: ItemId): T | undefined;
}
