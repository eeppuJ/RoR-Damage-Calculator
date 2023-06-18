import type { Boots } from "@/features/gearing/domain/items/boots/Boots";
import type { LoadItemPort } from "@/features/gearing/application/commands/port/items/out/LoadItemPort";

export interface LoadBootsPort extends LoadItemPort<Boots> {}
