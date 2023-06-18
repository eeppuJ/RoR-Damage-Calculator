import type { LoadItemPort } from "@/features/gearing/application/commands/port/items/out/LoadItemPort";
import type { Belt } from "@/features/gearing/domain/items/belt/Belt";

export interface LoadBeltPort extends LoadItemPort<Belt> {}
