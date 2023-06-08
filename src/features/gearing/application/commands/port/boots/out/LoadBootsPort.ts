import type { BootsId } from "@/features/gearing/domain/items/boots/BootsId";
import type { Boots } from "@/features/gearing/domain/items/boots/Boots";

export interface LoadBootsPort {
  load(bootsId: BootsId): Boots | undefined;
}
