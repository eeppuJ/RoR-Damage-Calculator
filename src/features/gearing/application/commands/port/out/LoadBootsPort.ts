import type { BootsId } from "@/features/gearing/domain/items/BootsId";
import type { Boots } from "@/features/gearing/domain/items/Boots";

export interface LoadBootsPort {
  load(bootsId: BootsId): Boots | undefined;
}
